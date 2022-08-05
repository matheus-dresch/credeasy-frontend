<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009" />
        <FundoPadrao size="75">
            <MsgErro v-if="erro.status" :erro="erro" />
            <TabelaPadrao v-if="parcelas" :titulo="`Parcelas do empréstimo`">
                <thead>
                    <th>Número</th>
                    <th>Valor</th>
                    <th>Data venc.</th>
                    <th>Data pgto.</th>
                    <th>Status</th>
                </thead>
                <tbody v-for="parcela in parcelas">
                    <tr>
                        <td class="fw-bold"># {{ parcela.numero }}</td>
                        <td>{{ formataDinheiro(parcela.valor) }}</td>
                        <td>{{ formataData(parcela.data_vencimento) }}</td>
                        <td>{{ formataData(parcela.data_pagamento) }}</td>
                        <td>{{ parcela.status }}</td>
                        <td><BotaoRoxo titulo="Pagar" @click="pagarParcela(parcela.id)"/></td>
                    </tr>
                </tbody>
            </TabelaPadrao>
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
import MsgErro from '../../components/shared/MsgErro.vue';
import { formataData, formataDinheiro } from '../../assets/js/formatar';
import BotaoRoxo from '../../components/shared/BotaoRoxo.vue';

function pagarParcela(id) {
    axios.patch(`parcela/${id}`)
        .then(res => console.log('A parcela foi paga! ' + res.status));
}

const parcelas = ref();

const isLoading = ref(true);
const erro = ref({
    status: '',
    msg: ''
})

const emprestimoId = useRoute().params.id
axios.get(`emprestimos/${emprestimoId}/parcelas`)
    .then(res => {parcelas.value = res.data})
    .catch(err => {
        erro.value.msg = `Tivemos um problema ao carregar as parcelas`;
        erro.value.status = err.response.status;
    })
    .finally(() => isLoading.value = false);



</script>

<style scoped>
td {
    vertical-align: middle;
}
</style>