<template>
    <div class="input-div">
        <label class="input-label">
            <h6 class="text-light">{{ titulo }}</h6>
            <input class="input-box" :type="tipo" :name="nome" :placeholder="placeholder" :required="required" :step="step">
        </label>
    </div>
</template>

<script setup>

defineProps({
    titulo: {
        type: String, 
        required: true
    },
    tipo: {
        type: String,
        default: 'text'
    },
    nome: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        default: true
    },
    placeholder: {
        type: String,
        required: true
    },
    step: {
        type: Number,
        default: 1
    }
})

</script>

<style scoped>
@import '/src/assets/css/input.css';
</style>