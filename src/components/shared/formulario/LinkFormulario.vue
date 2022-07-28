<template>
    <router-link class="text-light p-1 m-0" :to="url">&#8250; {{ titulo }}</router-link>
</template>

<script setup>
defineProps({
    url: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    a:hover {
        font-weight: 500;
    }
</style>