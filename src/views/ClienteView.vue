<template>
    <header-cliente />
    <main class="p-3">
        <h3 class="text-light mb-4">Olá! Você está na área do cliente.</h3>
        <section class="d-grid container-fluid" v-if="cliente">
            <div class="row">
                <card :icone="iconePerfil" :titulo="'Olá, ' + cliente.nome">
                    <card-link :url="{ name: 'entrar' }" icone="account_circle" titulo="Acessar conta" />
                    <card-link :url="{ name: 'entrar' }" icone="settings" titulo="Configurações" />
                    <card-link :url="{ name: 'entrar' }" icone="logout" titulo="Sair" />
                </card>

                <card :icone="iconeDinheiro" titulo="Próxima parcela">
                    <span v-if="proximaParcela">
                        <card-dado icone="event" :conteudo="formataData(proximaParcela.data_vencimento)" />
                        <card-dado icone="paid" :conteudo="formataDinheiro(proximaParcela.valor)" />
                        <card-link :url="{ name: 'parcelas-emprestimo', params: { id: proximaParcela.emprestimo_id } }"
                            icone="arrow_circle_right" titulo="Acessar" />
                    </span>
                    <card-dado v-else icone="info" conteudo="Você não possui parcelas em aberto" />
                </card>

                <card :icone="iconeEstrela" titulo="Último empréstimo">
                    <span v-if="ultimoEmprestimo">
                        <card-dado icone="info" :conteudo="ultimoEmprestimo.nome" />
                        <card-dado icone="paid" :conteudo="formataDinheiro(ultimoEmprestimo.valor)" />
                        <card-link :url="{ name: 'entrar' }" icone="arrow_circle_right" titulo="Acessar" />
                    </span>
                    <card-dado v-else icone="info" conteudo="Você não possui empréstimos" />
                </card>
            </div>
            <div class="row">
                <div class="col pb-2 px-1">
                    <article class="perfil-container rounded text-light text-center" style="height: 100%;"></article>
                </div>
                <div class="col-12 col-lg-6 mb-2 px-1">
                    <article id="emp-btn-1" class="emp-btn rounded text-light text-center">
                        <router-link :to="{ name: 'novo-emprestimo' }"
                            class="p-4 fs-3 fs-lg-1 m-0 fw-bolder rounded d-flex justify-content-center align-items-center text-decoration-none text-light">
                            <span class="material-symbols-outlined fs-2 me-2 d-none d-lg-inline">
                                paid
                            </span>
                            SOLICITAR EMPRÉSTIMO
                        </router-link>
                    </article>
                </div>
                <div class="col-3 pb-2 px-1">
                    <article class="perfil-container rounded text-light text-center" style="height: 100%;"></article>
                </div>
            </div>
            <div class="row">
                <card :icone="iconeGrafico" titulo="Estatísticas">
                    <card-dado  icone="payments" :conteudo="'Emprestado: ' + formataDinheiro(cliente.total_emprestado) "/>
                    <card-dado  icone="paid" :conteudo="'Pago: ' + formataDinheiro(cliente.total_pago) "/>
                    <card-dado  icone="filter_1" :conteudo="'Empréstimos: ' + cliente.quantidade_emprestimos "/>
                </card>
                <card :icone="iconeAjuda" titulo="Contato">
                    <card-dado  icone="call" conteudo="(54) 3003-9999"/>
                    <card-dado  icone="smartphone" conteudo="(54) 9999-3003" />
                    <card-dado  icone="mail" conteudo="suporte@credeasy.com.br"/>
                </card>
                <card :icone="iconeAviso" titulo="Avisos">
                    <card-dado icone="info" conteudo="Você não tem nenhum aviso" />
                </card>
            </div>
            <div class="row">
                <card-tabela @input="filtro = $event.target.value">
                        <thead>
                            <th class="w-20">Nome</th>
                            <th class="w-20">Valor</th>
                            <th class="w-20">Parcelas</th>
                            <th class="w-20">Status</th>
                        </thead>
                        <tbody>
                            <tr v-for="emprestimo in emprestimosFiltrados" :class="{ 'bg-white-25': emprestimo.status === 'QUITADO' }" class="rounded">
                                <td>{{ emprestimo.nome }}</td>
                                <td>{{ formataDinheiro(emprestimo.valor) }}</td>
                                <td>{{ emprestimo.qtd_parcelas }}</td>
                                <td>{{ emprestimo.status }}</td>
                                <td><link-roxo :url="{ name: 'detalhar-emprestimo', params: { id: emprestimo.id } }"/></td>
                            </tr>
                        </tbody>
                </card-tabela>
            </div>
        </section>
    </main>
    <footer-padrao />
</template>

<script setup>
import 'vue-loading-overlay/dist/vue-loading.css';
import HeaderCliente from '../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';
import Card from '../components/cliente/card/Card.vue';
import CardLink from '../components/cliente/card/CardLink.vue';
import CardDado from '../components/cliente/card/CardDado.vue';

import iconePerfil from '@/assets/icons/cliente/profile.svg';
import iconeDinheiro from '@/assets/icons/cliente/money.svg';
import iconeEstrela from '@/assets/icons/cliente/star.svg';
import iconeGrafico from '@/assets/icons/cliente/graph.svg';
import iconeAjuda from '@/assets/icons/cliente/help.svg';
import iconeAviso from '@/assets/icons/cliente/warn.svg';

import http from '../http';
import { formataData, formataDinheiro } from '../assets/js/formatar';
import CardTabela from '../components/cliente/card/CardTabela.vue';
import LinkRoxo from '../components/shared/LinkRoxo.vue';
import { computed, ref } from '@vue/reactivity';

const ultimoEmprestimo = ref();
const proximaParcela = ref();
const emprestimos = ref([]);
const cliente = ref();
const dados = ref();

http.get('cliente')
    .then(res => {
        const data = res.data;

        ultimoEmprestimo.value = data.ultimo_emprestimo;
        emprestimos.value = data.emprestimos
        proximaParcela.value = data.proxima_parcela;
        dados.value = data.dados;
        
        cliente.value = data.cliente;
    });

const filtro = ref();

const emprestimosFiltrados = computed(() => {
    if (! filtro.value) return emprestimos.value;
    
    return emprestimos.value.filter(emprestimo => emprestimo.status === filtro.value);
})

</script>

<style>
.bg-white-25 {
    background-color: #fff1;
}

</style>