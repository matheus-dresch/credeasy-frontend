<template>
    <router-link :to="url" class="btn btn-outline-purple d-flex">
        <span class="material-symbols-outlined me-2">
            arrow_circle_right
        </span>
        <span class="d-none d-sm-inline">
            {{ titulo }}
        </span>
    </router-link>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    url: {
        default: '/'
    },
    icone: {
        type: String,
        default: 'arrow_circle_right'
    },
    titulo: {
        type: String,
        default: 'Acessar'
    }
})

</script>

<style>
</style>