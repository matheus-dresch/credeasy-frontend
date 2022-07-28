<template>
    <header id="header-nav" class="navbar navbar-expand-md navbar-dark sticky-top">
        <section class="container-fluid">
            <router-link id="header-title" class="navbar-brand" :to="url">CredEasy</router-link>
        </section>
    </header>
</template>

<script setup>

defineProps({
    url: {
        type: String,
        default: '/'
    }
})

</script>

<style>
</style>