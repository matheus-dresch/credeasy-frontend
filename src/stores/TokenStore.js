import { defineStore } from 'pinia';

export const useTokenStore = defineStore('token', {
    state: () => ({
        token: '',
    }),
    actions: {
        defineToken(token) {
            this.token = token
        },
        revogaToken() {
            this.token = '';
        },
    },
    persist: true,
    getters: {
        getToken() {
            return this.token
        }
    }
})