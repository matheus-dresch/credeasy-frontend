<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center">
        <FundoPadrao size="50">
            <TabelaPadrao v-if="parcelas" :titulo="`Parcelas do empréstimo`">
                <thead>
                    <th>Número</th>
                    <th>Valor</th>
                    <th>Data venc.</th>
                    <th>Data pgto.</th>
                    <th>Status</th>
                </thead>
                <tbody v-for="parcela in parcelas">
                    <td>{{ parcela.numero }}</td>
                    <td>{{ parcela.valor }}</td>
                    <td>{{ parcela.data_vencimento }}</td>
                    <td>{{ parcela.data_pagamento }}</td>
                    <td>{{ parcela.status }}</td>
                </tbody>
            </TabelaPadrao>
            <h2 v-else class="text-light text-center">Carregando empréstimo <Loader /></h2>
            <h2 v-if="true" class="text-light text-center">O empréstimo não possuí parcelas</h2>
        </FundoPadrao>
    </main>
    <FooterPadrao />
</template>

<script setup>
import { ref } from 'vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Loader from '../../components/shared/Loader.vue';

const parcelas = ref();
const emprestimoId = useRoute().params.id

axios.get(`http://localhost:8000/api/emprestimos/${emprestimoId}/parcelas`)
    .then(res => {
        if(res.status === 200) {
            parcelas.value = res.data
        } else {

        }
    });

</script>

<style>
</style>