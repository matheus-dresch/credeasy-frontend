<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center">
        <div class="bg-dark-25 rounded-4 p-3 w-50" v-if="emprestimo">
            <h1 class="text-light text-center">Empréstimo '{{ emprestimo.nome }}'</h1>
            <table class="table text-light">
                <tbody>
                    <tr>
                        <th class="w-50">ID</th>
                        <td># {{ emprestimo.id }}</td>
                    </tr>
                    <tr>
                        <th>Nome</th>
                        <td>{{ emprestimo.nome }}</td>
                    </tr>
                    <tr>
                        <th>Valor inicial</th>
                        <td>{{ emprestimo.valor }}</td>
                    </tr>
                    <tr>
                        <th>Valor final</th>
                        <td>{{ emprestimo.valor_final }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';

const emprestimo = ref();
const idEmprestimo = useRoute().params.id

axios.get(`http://localhost:8000/api/emprestimos/${idEmprestimo}`)
    .then(res => emprestimo.value = res.data);

let formatador = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

emprestimo.valor = formatador.format(emprestimo.valor)
emprestimo.valor_final = formatador.format(emprestimo.valor_final)

</script>

<style>
</style>