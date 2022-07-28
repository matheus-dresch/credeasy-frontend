<template>
    <div id="products-section" class="row main-row">
        <article class="col p-4">
            <h3 class="info-title text-center text-lg-start mb-3">Conheça nossas linhas de crédito</h3>
            <div class="d-grid">
                <div class="row justify-content-center justify-content-lg-evenly gap-2">
                    <CardCredito :card="card1"/>
                    <CardCredito :card="card2"/>
                    <CardCredito :card="card3"/>
                    <CardCredito :card="card4"/>
                    <CardCredito :card="card5"/>
                </div>
            </div>
        </article>
    </div>
</template>

<script lang='ts'>
import CardCredito from './CardCredito.vue';

export default ({
    components: { CardCredito },

    data() {
        return {
            card1: {
                icone: 'person',
                titulo: 'Crédito pessoal',
                descricao: 'O crédito perfeito para aquela situação que você precisa de um dinheiro rápido e fácil.'
            },
            card2: {
                icone: 'flight_takeoff',
                titulo: 'Crédito turismo',
                descricao: ' Querendo viajar? Temos a linha de crédito perfeita para você realizar aquela viagem dos sonhos.'
            },
            card3: {
                icone: 'apartment',
                titulo: 'Crédito imobiliário',
                descricao: 'Seja para um apartamento ou para uma casa própria, temos a linha de crédito feita para você.'
            },
            card4: {
                icone: 'directions_car',
                titulo: 'Crédito veículo',
                descricao: 'Precisando de um carro, moto ou caminhão? Não se preocupe, faça seu financiamento com a gente!'
            },
            card5: {
                icone: 'house',
                titulo: 'Crédito reforma',
                descricao: 'Quer dar uma renovada na sua casa, ou até mesmo contruir uma nova? Deixa que a gente te ajuda!'
            },
    
        }
    },
});
</script>

<style>
</style>