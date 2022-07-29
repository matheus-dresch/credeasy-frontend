<template>
<span>{{ dataFormatada }}</span>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    data: {
        type: String,
        required: true
    }    
})
const dataFormatada = ref(formata(props.data))

function formata(val) {
    return new Date(val).toLocaleDateString('pt-BR');
}

</script>

<style>
</style>