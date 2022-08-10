<template>
    <div class="alert alert-danger alert-dismissible fade show rounded-4 d-flex align-items-center fw-bold" role="alert">
        <span class="material-symbols-outlined me-2">
            error
        </span>
        {{ texto }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script setup>

defineProps({
    texto: ''
})

</script>

<style>
</style>