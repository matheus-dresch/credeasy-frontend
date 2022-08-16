<template>
	<div class="toast-container position-fixed bottom-0 end-0 p-3">
		<Notificacao v-for="notificacao in notificacoes" :notificacao="notificacao" />
	</div>
	<router-view></router-view>
</template>

<script setup>
import Notificacao from './components/shared/Notificacao.vue';
import { useNotificacaoStore } from './stores/NotificacaoStore';

const notificacaoStore = useNotificacaoStore();
const notificacoes = notificacaoStore.$state.notificacoes;
</script>

<style>
</style>
