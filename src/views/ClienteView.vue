<template>
    <HeaderCliente />
    <main class="p-3 vld-parent">
        <loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009"/>
    </main>
    <FooterPadrao />
</template>

<script setup>
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import HeaderCliente from '../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';

const isLoading = ref(true)
</script>