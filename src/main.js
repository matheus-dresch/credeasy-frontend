import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import Loading from 'vue-loading-overlay';
import * as Yup from 'yup';
import { pt } from "yup-locale-pt";
import { VMoney } from 'v-money';
import store from "./store";

//? Bootstrap
import './assets/bootstrap/bootstrap.js'
import './assets/bootstrap/bootstrap.css'

Yup.setLocale(pt)

const app = createApp(App);

app.directive('money', VMoney)
app.component('loading', Loading);

app.use(store);
app.use(VueMask);
app.use(router);

app.mount("#app");
