import axios from "axios";
import provedor from '../store';

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    },
    withCredentials: true
})

http.interceptors.request.use(config => {
    const token = provedor.state.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
}, err => Promise.reject(err))

export default http;