<template>
    <button @click="$emit('clicado')" :class="`btn-outline-${cor} ` + { disabled: disabled }" class="btn d-flex w-100" :disabled="disabled">
        <span class="material-symbols-outlined me-2">
            {{ icone }}
        </span>
        <span class="d-none d-sm-inline">
            {{ titulo }}
        </span>
    </button>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    icone: {
        type: String,
        default: 'arrow_circle_right'
    },
    titulo: {
        type: String,
        default: 'Acessar'
    },
    cor: {
        type: String,
        default: 'purple'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

</script>

<style>
</style>