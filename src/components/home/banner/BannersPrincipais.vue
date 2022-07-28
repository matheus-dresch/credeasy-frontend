<template>
    <section id="scrollspyHeading1" class="container-fluid d-grid" style="max-width: 100vw;">
        <BannerPadrao :banner="bannerCadastro"/>
        <BannerPadrao :banner="bannerLogin"/>
        <BannerPadrao :banner="bannerSimular"/>
    </section>
</template>

<script lang='ts'>
import BannerPadrao from './BannerPadrao.vue';

export default ({
    name: "BannersPrincipais",
    data() {
        return {
            bannerCadastro: {
                titulo: "Precisando de crédito?",
                descricao: "Conte conosco!",
                botao: "Cadastrar",
                link: "/cadastro",
                imagemInicio: true,
                imagem: "banner1.webp"
            },
            bannerLogin: {
                titulo: "Já é nosso cliente?",
                descricao: "Acesse sua conta",
                botao: "Entrar",
                link: "/entrar",
                imagemInicio: false,
                imagem: "banner2.webp"
            },
            bannerSimular: {
                titulo: "Quer apenas simular?",
                descricao: "Simule seu empréstimo",
                botao: "Simular",
                link: "/",
                imagemInicio: true,
                imagem: "banner3.webp"
            }
        };
    },
    components: { BannerPadrao }
});
</script>

<style>
</style>