<template>
    <header id="header-nav" class="navbar navbar-expand-md navbar-dark sticky-top">
        <section class="container-fluid">

            <a id="header-title" class="navbar-brand">CredEasy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <section class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link navbar-link rounded" href="#scrollspyHeading1">ínicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-link rounded" href="#scrollspyHeading2">sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-link rounded" href="#scrollspyHeading3">termos</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-2 mb-3 mb-md-0">
                        <router-link :to="{ name: 'entrar' }" class="btn btn-outline-light px-4 fw-bold">Entrar
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'cadastro' }" class="btn btn-outline-purple px-4 fw-bold">Cadastrar
                        </router-link>
                    </li>
                </ul>
            </section>
        </section>
    </header>
</template>

<script lang='ts'>

export default ({
    name: 'HeaderHome'
});
</script>

<style>
</style>