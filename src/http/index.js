import axios from "axios";
import { useLoading } from 'vue-loading-overlay';
import store from "../store";

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
        config.headers.Authorization = `Bearer ${store.state.token}`
    }

    return config
}, err => Promise.reject(err))

http.interceptors.response.use(response => {
    response.config.spinner.hide();

    return response
}, err => {
    err.config.spinner.hide();
})

export default http;