<template>
<loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009" />
</template>

<script setup>

defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})

</script>

<style>
</style>