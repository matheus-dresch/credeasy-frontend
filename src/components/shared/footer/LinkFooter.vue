<template>
    <div class="col-12 col-lg-2 d-flex justify-content-center align-items-center">
        <router-link :to="url" class="text-light nav-link d-flex">
            <span>{{ titulo }}</span>
        </router-link>
    </div>
</template>

<script setup>
defineProps({
    titulo: {
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