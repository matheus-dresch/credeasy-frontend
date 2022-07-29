<template>
    <HeaderCliente />
    <main class="p-3">
        <article class="bg-dark-25 p-2 rounded-4">
            <h3 class="text-light">Lista de empréstimos</h3>
            <table class="table text-light">
                <thead>
                    <th class="w-15">Nome</th>
                    <th class="w-15">Valor</th>
                    <th class="w-15">Parcelas</th>
                    <th class="w-15">Data</th>
                    <th class="w-15">Status</th>
                </thead>
                <tbody>
                    <tr v-if="emprestimos" v-for="emprestimo of emprestimos">
                        <td>{{ emprestimo.nome }}</td>
                        <td><DinheiroSpan :valor="emprestimo.valor"/></td>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                        <td><DataSpan :data="emprestimo.data_solicitacao" /></td>
                        <td>{{ emprestimo.status }}</td>
                        <td><BotaoRoxo :url="`/emprestimos/${emprestimo.id}`" /></td>
                    </tr>
                    <tr v-if="loading">
                        <td><Loader /></td>
                        <td><Loader /></td>
                        <td><Loader /></td>
                        <td><Loader /></td>
                        <td><Loader /></td>
                    </tr>
                </tbody>
            </table>
        </article>
    </main>
    <FooterPadrao />
</template> 

<script setup>
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import DinheiroSpan from '../../components/shared/DinheiroSpan.vue';
import BotaoRoxo from '../../components/shared/BotaoRoxo.vue';
import DataSpan from '../../components/shared/DataSpan.vue';
import { ref } from 'vue';
import Loader from '../../components/shared/Loader.vue';
import axios from 'axios';

const emprestimos = ref([]);
const loading = ref(true)

axios.get('http://localhost:8000/api/emprestimos')
    .then(res => {
        loading.value = false
        emprestimos.value = res.data
    })
</script>

<style>
.w-15 {
    width: 15%;
}
</style>