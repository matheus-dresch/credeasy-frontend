import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/app.css";
import ArrowRightThinCircleOutline from 'vue-material-design-icons/ArrowRightThinCircleOutline.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App);

app.component('arrow_right', ArrowRightThinCircleOutline)
app.component('loading', Loading)

app.use(router);

app.mount("#app");
