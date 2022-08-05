import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import Loading from 'vue-loading-overlay';
import * as Yup from 'yup';
import { pt } from "yup-locale-pt";
import { VMoney } from 'v-money';


//? Bootstrap
import './assets/bootstrap/bootstrap.js'
import './assets/bootstrap/bootstrap.css'

axios.defaults.baseURL = 'http://localhost:8000/api'

Yup.setLocale(pt)

const app = createApp(App);

app.directive('money', VMoney)
app.use(VueMask);
app.component('loading', Loading);
app.use(router);

app.mount("#app");
