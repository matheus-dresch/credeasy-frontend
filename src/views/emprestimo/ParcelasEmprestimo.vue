<template>
    <header-cliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <fundo-padrao size="75" v-if="emprestimo">
            <h2 class="text-light text-center">
                Parcelas do empréstimo
                <router-link :to="{ name: 'detalhar-emprestimo', params: { id: emprestimo } }" class="text-light">
                    {{ emprestimo }}
                </router-link>
            </h2>
            <tabela-padrao>
                <thead>
                    <th>Número</th>
                    <th>Valor</th>
                    <th>Data venc.</th>
                    <th>Data pgto.</th>
                    <th>Status</th>
                </thead>
                <tbody v-for="parcela, index in parcelas">
                    <tr :class=" { 'bg-warning-25': parcela.status === 'ATRASADA' } ">
                        <td class="fw-bold"># {{ parcela.numero }}</td>
                        <td>{{ formataDinheiro(parcela.valor) }}</td>
                        <td>{{ formataData(parcela.data_vencimento) }}</td>
                        <td>{{ formataData(parcela.data_pagamento) }}</td>
                        <td>{{ parcela.status }}</td>
                        <td v-if="parcela.numero === proximaParcela">
                            <botao-grande titulo="Pagar" @click="pagarParcela(parcela.id, index)" />
                        </td>
                        <td v-else-if="parcela.status === 'PAGA'">
                            <botao-grande titulo="Pago" cor="success" icone="check_circle" :disabled="true" />
                        </td>
                        <td v-else>
                            <botao-grande titulo="Pagar" cor="danger" icone="cancel" :disabled="true" />
                        </td>
                    </tr>
                </tbody>
            </tabela-padrao>
        </fundo-padrao>
    </main>
    <footer-padrao />
</template>

<script setup>
import { ref } from 'vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import { useRoute } from 'vue-router';
import { formataData, formataDinheiro } from '../../assets/js/formatar';
import BotaoGrande from '../../components/shared/BotaoGrande.vue';
import EmprestimoService from '../../service/EmprestimoService';

function pagarParcela(id, index) {
    EmprestimoService.pagaParcela(id)
        .then(parcela => {
            parcelas.value[index] = parcela
            proximaParcela.value++
        })
        .catch(err => {
            console.log(err);
        })
}

const parcelas = ref();
const proximaParcela = ref();
const emprestimo = ref();

const emprestimoId = useRoute().params.id
EmprestimoService.parcelas(emprestimoId)
    .then(res => {
        parcelas.value = res.data.parcelas;
        console.log(parcelas.value);
        emprestimo.value = parcelas.value[1].emprestimo_id;
    })
</script>

<style scoped>
td {
    vertical-align: middle;
}

.bg-warning-25 {
    background-color: #f001;
}
</style>