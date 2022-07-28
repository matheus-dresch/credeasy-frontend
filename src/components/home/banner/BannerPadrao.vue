<template>
    <section :id="banner.imagem" class="row main-row" style="max-width: 100vw;">
        <ImagemBanner v-if="banner.imagemInicio" :imagem="banner.imagem" />
        <article
            class="col-md-4 col-sm-12 info-banner-txt py-5 p-md-0 d-flex flex-column justify-content-center align-items-center">
            <h2 class="banner-title fst-italic text-center">
                {{ banner.titulo }}
            </h2>
            <p class="banner-text text-center text-light fs-4">{{ banner.descricao }}</p>
            <router-link class="btn btn-outline-purple d-block w-50 fw-bold" :to="banner.link">{{ banner.botao }}</router-link>
        </article>
        <ImagemBanner v-if="!banner.imagemInicio" :imagem="banner.imagem" />
    </section>
</template>

<script lang='ts'>
import ImagemBanner from './BannerImagem.vue';

export default ({
    name: "BannerPadrao",
    props: {
        banner: {
            type: Object,
            required: true
        }
    },
    components: { ImagemBanner }
});
</script>

<style>
</style>