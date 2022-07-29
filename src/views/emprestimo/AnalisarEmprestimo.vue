<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center">
        <FundoPadrao size="50" v-if="emprestimo && cliente">
            <TabelaPadrao :titulo="`Cliente ${cliente.nome}`">
                <tbody>
                    <tr>
                        <th class="w-50">ID</th>
                        <td># {{ emprestimo.id }}</td>
                    </tr>
                    <tr>
                        <th>Profissão</th>
                        <td>{{ cliente.profissao }}</td>
                    </tr>
                    <tr>
                        <th>Renda</th>
                        <td>{{ cliente.renda }}</td>
                    </tr>
                    <tr>
                        <th>Telefone</th>
                        <td>{{ cliente.telefone }}</td>
                    </tr>
                </tbody>
            </TabelaPadrao>
            <TabelaPadrao :titulo="`Empréstimo ${emprestimo.nome}`">
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
                        <td>
                            <DinheiroSpan :valor="emprestimo.valor" />
                        </td>
                    </tr>
                    <tr>
                        <th>Valor total
                            <span class="badge bg-secondary rounded-circle" data-bs-toggle="tooltip"
                                title="Valor total estimado com os juros">
                                ?
                            </span>
                        </th>
                        <td>
                            <DinheiroSpan :valor="emprestimo.valor_final" />
                        </td>
                    </tr>
                    <tr>
                        <th>Data de solicitação</th>
                        <td>
                            <DataSpan :data="emprestimo.data_solicitacao" />
                        </td>
                    </tr>
                    <tr>
                        <th>Nº parcelas</th>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{{ emprestimo.status }}</td>
                    </tr>
                </tbody>
            </TabelaPadrao>
            <div>
                <form action="" class="w-100" method="post">
                    <div class="row">
                        <div class="col pe-1">
                            <label for="valor_parc" class="form-label text-light">Taxa de juros (%)</label>
                            <input class="form-control" type="number" min="10" max="20" step="0.1" name="taxa"
                                id="taxa">
                        </div>
                        <div class="col ps-1">
                            <label for="valor_parc" class="form-label text-light">Valor da parcela</label>
                            <input class="form-control disabled" type="text" id="valor_parc" disabled value="R$ ">
                        </div>
                    </div>
                    <div class="d-flex w-100 mt-3">
                        <button type="submit" value="1" name="status"
                            class="form-control btn btn-outline-success w-100 me-1">
                            Aprovar
                        </button>
                        <button type="submit" value="2" name="status" class="btn btn-outline-danger w-100 ms-1">
                            Rejeitar
                        </button>
                    </div>
                </form>
            </div>
        </FundoPadrao>
    </main>
    <FooterPadrao />
</template>

<script setup>
import { ref } from 'vue';
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import Loader from '../../components/shared/Loader.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import DataSpan from '../../components/shared/DataSpan.vue';
import DinheiroSpan from '../../components/shared/DinheiroSpan.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';

const emprestimo = ref();
const cliente = ref();

const emprestimoId = useRoute().params.id

axios.get(`http://localhost:8000/api/emprestimos/${emprestimoId}`)
    .then(res => emprestimo.value = res.data)
    .then(() => cliente.value = emprestimo.value.cliente);
</script>

<style>
</style>