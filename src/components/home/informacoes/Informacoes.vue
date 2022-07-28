<template>
    <section id="scrollspyHeading2" class="container-fluid d-grid">
        <Sobre />
        <LinhasCredito />
    </section>
</template>

<script lang='ts'>
import Sobre from './Sobre.vue';
import LinhasCredito from './LinhasCredito.vue';

export default ({
    name: "Informacoes",
    components: { Sobre, LinhasCredito }
});
</script>

<style>
</style>