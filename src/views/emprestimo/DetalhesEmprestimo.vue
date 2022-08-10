<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009" />
        <FundoPadrao size="50">
            <MsgErro v-if="erro.status" :erro="erro"/>
            <TabelaPadrao v-if="emprestimo" :titulo="`Empréstimo ${emprestimo.nome}`">
                <tbody>
                    <tr>
                        <th class="w-50">ID</th>
                        <th># {{ emprestimo.id }}</th>
                    </tr>
                    <tr>
                        <th>Nome</th>
                        <td>{{ emprestimo.nome }}</td>
                    </tr>
                    <tr>
                        <th>Valor inicial</th>
                        <td>{{ formataDinheiro(emprestimo.valor) }}</td>
                    </tr>
                    <tr>
                        <th>Valor final</th>
                        <td>{{ formataDinheiro(emprestimo.valor_final) }}</td>
                    </tr>
                    <tr>
                        <th>Data Solicitação</th>
                        <td>{{ formataData(emprestimo.data_solicitacao) }}</td>
                    </tr>
                    <tr>
                        <th>Data Quitação</th>
                        <td>{{ formataData(emprestimo.data_quitacao) }}</td>
                    </tr>
                    <tr>
                        <th>Nº parcelas</th>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                    </tr>
                    <tr>
                        <th>Taxa de juros</th>
                        <td>{{ emprestimo.taxa_juros.toFixed(2) }} %</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{{ emprestimo.status }}</td>
                    </tr>
                    <tr v-if="emprestimo.tem_parcelas">
                        <td colspan="2">
                            <LinkRoxo titulo="Acessar parcelas" :url="`/emprestimos/${emprestimo.id}/parcelas`" />
                        </td>
                    </tr>
                </tbody>
            </TabelaPadrao>
        </FundoPadrao>
    </main>
    <FooterPadrao />
</template>

<script setup>

// Componentes:
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';
import LinkRoxo from '../../components/shared/LinkRoxo.vue';
import MsgErro from '../../components/shared/MsgErro.vue';
import EmprestimoService from '../../service/EmprestimoService';

// Outros
import { formataDinheiro, formataData } from '@/assets/js/formatar'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const isLoading = ref(true);
const emprestimo = ref();
const erro = ref({
    status: '',
    msg: ''
})

const idEmprestimo = useRoute().params.id

EmprestimoService.detalha(idEmprestimo)
    .then(res => {
        emprestimo.value = res
    })
    .catch(err => {
        erro.value.msg = `Tivemos um problema ao carregar o empréstimo`;
        erro.value.status = err.response.status;
    })
    .finally(() => isLoading.value = false);

</script>

<style>
</style>