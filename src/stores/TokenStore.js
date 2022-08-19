import { defineStore } from 'pinia';

export const useTokenStore = defineStore('token', {
    state: () => ({
        token: '',
        gestor: false
    }),
    actions: {
        defineToken(token, gestor) {
            this.token = token
            this.gestor = gestor
        },
        revogaToken() {
            this.token = '';
            this.gestor = false
        },
    },
    persist: true,
    getters: {
        getToken() {
            return this.token
        },
        getGestor() {
            return this.gestor
        }
    }
})