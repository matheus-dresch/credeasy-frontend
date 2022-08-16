import { defineStore } from "pinia";

export const useNotificacaoStore = defineStore('notificacoes', {
    state: () => ({
        notificacoes: []
    }),
    actions: {
        notifica(notificacao) {
            notificacao.index = this.notificacoes.length;
            this.notificacoes.push(notificacao);
        },
        remove(notificacao) {
            this.notificacoes.splice(this.notificacoes.indexOf(notificacao));
        }
    }
})