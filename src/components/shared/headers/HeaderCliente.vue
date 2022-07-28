<template>
    <header id="header-nav" class="navbar navbar-expand-md navbar-dark sticky-top">
        <section class="container-fluid">

            <router-link to="/cliente" id="header-title" class="navbar-brand">CredEasy</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <section class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/cliente" class="nav-link navbar-link rounded active">ínicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link navbar-link rounded" to="">suporte</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link navbar-link rounded" to="/">sou gestor</router-link>
                    </li>
                </ul>
            </section>
        </section>
    </header>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style>
</style>