<template>
    <img src="../../assets/icons/loading.svg" id="loading" :style="`width: ${size}rem; heigth: 0.1rem;`">
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    size: {
        type: String,
        default: '6'
    }    
})

</script>

<style scoped>
#loading {
    width: auto;
}
</style>