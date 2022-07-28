<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center">
        <div class="bg-dark-25 rounded-4 p-3 w-50" v-if="emprestimo">
            <h1 class="text-light text-center">Empréstimo '{{ emprestimo.nome }}'</h1>
            <table class="table text-light">
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

                </tbody>
            </table>
        </div>
    </main>
    <FooterPadrao  />
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';

const emprestimo = ref();
const idEmprestimo = useRoute().params.id

axios.get(`http://localhost:8000/api/emprestimos/${idEmprestimo}`)
    .then(res => emprestimo.value = res.data);

const formataDinheiro = (numero) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero)
};

const formataData = (data) => {
    if (!data) return '--/--/----'

    return (new Date(data)).toLocaleDateString("pt-BR")
}

</script>

<style>
</style>