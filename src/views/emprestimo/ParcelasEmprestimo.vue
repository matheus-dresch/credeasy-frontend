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
                <tbody v-for="parcela, index in parcelas">
                    <tr>
                        <td class="fw-bold"># {{ parcela.numero }}</td>
                        <td>{{ formataDinheiro(parcela.valor) }}</td>
                        <td>{{ formataData(parcela.data_vencimento) }}</td>
                        <td>{{ formataData(parcela.data_pagamento) }}</td>
                        <td>{{ parcela.status }}</td>
                        <td v-if="parcela.proxima" >
                            <BotaoGrande titulo="Pagar" @click="pagarParcela(parcela.id, index)"/>
                        </td>
                        <td v-else-if="parcela.status === 'PAGA'">
                            <BotaoGrande titulo="Pago" cor="success" icone="check_circle" :disabled="true" />
                        </td>
                        <td v-else>
                            <BotaoGrande titulo="Pagar" cor="danger" icone="cancel" :disabled="true" />
                        </td>
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
import { useRoute } from 'vue-router';
import MsgErro from '../../components/shared/MsgErro.vue';
import { formataData, formataDinheiro } from '../../assets/js/formatar';
import BotaoGrande from '../../components/shared/BotaoGrande.vue';
import EmprestimoService from '../../service/EmprestimoService';

function pagarParcela(id, index) {
    isLoading.value = true;
    EmprestimoService.pagaParcela(id)
        .then(parcela => {
            let parcelaPaga = parcelas.value[index];
            let proximaParcela = parcelas.value[index + 1]

            parcelaPaga.status = parcela.status;
            parcelaPaga.data_pagamento = parcela.data_pagamento;
            
            parcelaPaga.proxima = false;
            proximaParcela.proxima = true;
        })
        .catch(err => {
            console.log(err.response.data);
        })
        .finally(() => isLoading.value = false);
}


const parcelas = ref();

const isLoading = ref(true);
const erro = ref({
    status: '',
    msg: ''
})

const emprestimoId = useRoute().params.id
EmprestimoService.parcelas(emprestimoId)
    .then(res => parcelas.value = res)
    .catch(err => {
        console.log(err);
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