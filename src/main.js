import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import * as Yup from 'yup';
import { pt } from "yup-locale-pt";
import { VMoney } from 'v-money';
import store from "./store";
import VueLoading from 'vue-loading-overlay';

//? Bootstrap
import './assets/bootstrap/bootstrap.js';
import './assets/bootstrap/bootstrap.css';
import 'vue-loading-overlay/dist/vue-loading.css';

Yup.setLocale(pt)

const app = createApp(App);

app.directive('money', VMoney)

app.use(VueLoading)
app.use(store);
app.use(VueMask);
app.use(router);

app.mount("#app");
