<template>
    <HeaderCliente />
    <main class="p-3 vld-parent">
        <loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009"/>
        <h1 class="text-light text-center">Dashboard v76</h1>
        <div class="d-flex justify-content-between">
            <router-link :to="{ name: 'emprestimos' }" class="text-light fs-1">Listagem de empréstimos</router-link>
            <router-link :to="{ name: 'novo-emprestimo' }" class="text-light fs-1">Solicitar empréstimo</router-link>
        </div>
    </main>
    <FooterPadrao />
</template>

<script setup>
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import HeaderCliente from '../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';

const isLoading = ref(false)
</script>