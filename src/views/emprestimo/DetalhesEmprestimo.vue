<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <FundoPadrao size="50">
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
                    <tr v-if="temParcelas">
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
import EmprestimoService from '../../service/EmprestimoService';

// Outros
import { formataDinheiro, formataData } from '@/assets/js/formatar'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const emprestimo = ref();
const temParcelas = ref(false);

const idEmprestimo = useRoute().params.id

EmprestimoService.detalha(idEmprestimo)
    .then(res => {
        emprestimo.value = res.data.emprestimo
        temParcelas.value = res.data.tem_parcelas
    })

</script>

<style>
</style>