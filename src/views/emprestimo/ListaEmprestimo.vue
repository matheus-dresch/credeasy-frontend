<template>
    <HeaderCliente />
    <main class="p-3">
        <article class="bg-dark-25 p-2 rounded-4">
            <h3 class="text-light">Lista de empréstimos</h3>
            <table class="table text-light">
                <thead>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Parcelas</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr v-for="emprestimo in emprestimos">
                        <td>{{ emprestimo.nome }}</td>
                        <td>{{ emprestimo.valor }}</td>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                        <td>{{ emprestimo.status }}</td>
                        <td><router-link :href="`/emprestimos/${emprestimo.id}`" class="btn btn-primary">acessar</router-link></td>
                    </tr>
                </tbody>
            </table>
        </article>
    </main>
    <FooterPadrao :fixado="true"/>
</template> 

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';

const emprestimos = ref([]);

axios.get('http://localhost:8000/api/emprestimos')
    .then(res => emprestimos.value = res.data)

</script>

<style>

</style>