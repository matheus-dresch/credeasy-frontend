<template>
    <a :href="url">
        <img :src="`/src/assets/icons/${icone}.svg`" :alt="icone" style="width: 2rem;">
    </a>
</template>

<script setup>

defineProps({
    icone: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: '/'
    }
})

</script>

<style>
</style>