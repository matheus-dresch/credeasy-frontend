import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE
import * as Yup from 'yup';
import { pt } from "yup-locale-pt";
import { VMoney } from 'v-money';
import VueLoading from 'vue-loading-overlay';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//? Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/css/main.css'

import 'vue-loading-overlay/dist/vue-loading.css';

Yup.setLocale(pt)

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

app.directive('money', VMoney)

app.use(pinia);
app.use(VueLoading)
app.use(VueMask);
app.use(router);

app.mount("#app");
