<template>
    <div id="info-section" class="row">
        <article class="col-lg-6 p-4 about-banner">
            <h3 class="info-title text-center text-lg-start">Um pouco sobre a gente</h3>
            <p class="text-light text-justify">
                A CredEasy&copy; nasceu em 2022, com o principal
                objetivo de proporcionar uma boa experiência à nossos usuários, cobrando taxas justas e que não
                pesem em seus bolsos. Conosco você pode realizar seus mais diversos sonhos, de comprar aquele carro
                que você tanto almeja até a viagem mais perfeita de todas!
            </p>
        </article>
        <article class="col-lg-6 p-4 about-banner">
            <h3 class="info-title text-center text-lg-start">Nossos números</h3>
            <div class="d-grid gap-3">
                <div class="row justify-content-center justify-content-lg-evenly gap-2">
                    <CardNumeros :card="card1"/>
                    <CardNumeros :card="card2" />
                    <CardNumeros :card="card3" />
                </div>
            </div>

        </article>
    </div>
</template>

<script lang='ts'>
import CardNumeros from './CardNumeros.vue';

export default ({
    data() {
        return {
            card1: {
                numero: "R$ 17,8",
                unidade: "Milhões",
                descricao: "Em empréstimos"
            },
            card2: {
                numero: "R$ 43,7",
                unidade: "Milhões",
                descricao: "Em investimentos"
            },
            card3: {
                numero: "R$ 108,9",
                unidade: "Milhões",
                descricao: "Em patrimônio"
            },
        };
    },
    components: { CardNumeros }
});
</script>

<style>
</style>