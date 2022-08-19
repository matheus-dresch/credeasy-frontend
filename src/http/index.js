import axios from "axios";
import { useLoading } from 'vue-loading-overlay';
import router from "../router";
import store from "../store";
import { useNotificacaoStore } from "../stores/NotificacaoStore";
import { useTokenStore } from "../stores/TokenStore";

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    },
})

let loading = useLoading({
    color: "#fff",
    backgroundColor: '#0009'
})

http.interceptors.request.use(config => {
    let spinner = loading.show();

    config.spinner = spinner;

    if (store.state.token) {
        config.headers.Authorization = `Bearer ${useTokenStore().token}`
    }

    return config
}, err => {
    Promise.reject(err)
    console.log(err);
})

http.interceptors.response.use(response => {
    response.config.spinner.hide();

    if (response.data.message) {
        useNotificacaoStore().notifica({
            titulo: 'Sucesso',
            mensagem: response.data.message
        })
    }

    return response
}, err => {
    err.config.spinner.hide();

    if (err.response.status && err.response.status === 401) router.push({ name: 'entrar' })
    

    useNotificacaoStore().notifica({
        titulo: `Erro ${err.response.status}`,
        mensagem: err.response.data.message
    });
})

export default http;