<template>
    <div class="input-div">
        <label class="input-label">
            <h6 class="text-light">{{ titulo }}</h6>
            <input class="input-box" 
                :type="tipo" 
                :name="nome" 
                :placeholder="placeholder" 
                :required="required" 
                :step="step"
                :maxlength="max"
                :minlength="min"
                :id="id"
                :inputmode="inputmode"

                @keypress="$emit('teclar', $event.target)"
                @focus="$emit('focar', $event.target)"
                >
        </label>
        <span class="error-message">Campo inválido</span>
    </div>
</template>

<script setup>

defineEmits([
    'teclar',
    'focar'
])

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
        default: false
    },
    max: {
        default: false
    },
    min: {
        default: false
    },
    id: {
        default: false
    },
    inputmode: {
        type: String,
        default: 'text'
    },
    erro: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped>
@import '@/assets/css/input.css';
</style>