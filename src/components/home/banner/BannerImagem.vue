<template>
    <article class="col info-banner-img p-0">
        <img class="objfit-cover w-100 h-100" :src="imagem" :alt="titulo">
    </article>
</template>

<script lang='ts'>
export default ({
    name: 'BannerImagem',
    props: ['imagem', 'titulo']
});
</script>

<style>
</style>