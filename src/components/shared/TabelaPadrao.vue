<template>
    <h3 v-if="titulo" class="text-light text-center">{{ titulo }}</h3>
    <table class="table text-light">
        <slot></slot> 
    </table>

</template>

<script setup>
import { ref } from 'vue';

defineProps({
    titulo: {
        type: String
    }
})

</script>

<style>
</style>