import router from "./router";
import store from "./store"

export const logoutMixin = {
    methods: {
        efetuarLogout() {
            store.commit('DESLOGA_USUARIO');
            router.push({ name: 'login' })
        }
    },
}