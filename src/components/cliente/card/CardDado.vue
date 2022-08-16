<template>
    <span class="d-flex align-items-center text-light text-decoration-none">
        <span class="material-symbols-outlined fs-5 me-2">{{ icone }}</span>
        {{ conteudo }}
    </span>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    icone: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    }
})

</script>

<style>
</style>