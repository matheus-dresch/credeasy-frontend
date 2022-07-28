<template>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn fw-bold btn-outline-purple rounded-4 px-5 py-1 my-3">{{ titulo }}</button>
    </div>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        default: 'Enviar'
    }
})
</script>

<style scoped>


</style>