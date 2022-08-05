<template>
<div class="p-3 text-light text-center">
    <h3>Oops :(</h3>
    <h5>{{erro.msg }}</h5>
    <h6>Código {{ erro.status }}</h6>
    <router-link to="/cliente">Voltar para a dashboard</router-link>
</div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    erro: {
        type: Object,
        required: true
    }
})

</script>

<style>
</style>