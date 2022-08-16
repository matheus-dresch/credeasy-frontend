<template>
    <router-link class="side-btn" :to="url">
        <span class="material-symbols-outlined fs-5 me-2">{{ icone }}</span>
        {{ titulo }}
    </router-link>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },
    icone: {
        type: String,
        required: true
    },
    url: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
a {
    display: flex;
    align-items: center;
    color: #eee;
    text-decoration: none;
    font-weight: bold;
    border-left: 0px solid rgb(98, 0, 255)
}

a:hover {
    border-left: 0.5rem solid rgb(98, 0, 255);
    padding-left: 0.5rem!important;
    color: #eee!important;
    transition: .5s;
}
</style>