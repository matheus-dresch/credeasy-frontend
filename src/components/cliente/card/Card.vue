<template>
    <div class="col-12 col-lg-4 mb-2 px-1">
        <article class="p-3 rounded d-flex align-items-center">
            <img :src="icone" class="img-5">
            <div class="ms-3">
                <h5 class="d-block text-light">&#8250; {{ titulo }}</h5>
                <div class="d-flex flex-column">
                    <slot></slot>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    icone: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    }
})

</script>

<style>
article {
    background-color: #5555;
    min-height: 100%;
}
</style>