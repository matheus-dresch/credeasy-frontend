<template>
    <span>R$ {{ valorFormatado }}</span>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    valor: {
        type: Number,
        required: true
    }
})

const valorFormatado = ref(formata(props.valor));

function formata(val) {
    return Intl.NumberFormat('pt-BR', { type: 'currency', currency: 'BRL' }).format(val);
}

</script>

<style>
</style>