<template>
    <article class="bg-dark-25 p-2 rounded-4" :class="'w-' + size">
        <slot></slot>
    </article>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    size: {
        type: String,
        default: '100'
    }
})

</script>

<style>
</style>