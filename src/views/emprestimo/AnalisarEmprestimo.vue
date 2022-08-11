<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <FundoPadrao size="50">
            <MsgErro v-if="erro.status" :erro="erro" />
            <TabelaPadrao v-if="cliente" :titulo="`Cliente ${cliente.nome}`">
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
            <TabelaPadrao v-if="emprestimo" :titulo="`Empréstimo ${emprestimo.nome}`">
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
                            {{ formataDinheiro(emprestimo.valor) }}
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
                            {{ formataDinheiro(emprestimo.valor_final) }}
                        </td>
                    </tr>
                    <tr>
                        <th>Data de solicitação</th>
                        <td>
                            {{ formataData(emprestimo.data_solicitacao) }}
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
                    <tr v-if="emprestimo.status === 'SOLICITADO'">
                        <td>
                            <div class="mb-2">
                                <label for="valor_parc" class="form-label text-light">Taxa de juros (%)</label>
                                <input class="form-control" type="number" min="10" max="20" step="0.1" name="taxa"
                                    id="taxa" :value="emprestimo.taxa_juros">
                            </div>
                            <div>
                                <button @click.prevent="analisaEmprestimo(true)"
                                    class="form-control btn btn-outline-success w-100 me-1">
                                    Aprovar
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="mb-2">
                                <label for="valor_parc" class="form-label text-light">Valor da parcela</label>
                                <input class="form-control disabled" type="text" id="valor_parc" disabled value="R$ ">
                            </div>
                            <div>
                                <button @click.prevent="analisaEmprestimo(false)"
                                    class="form-control btn btn-outline-danger w-100 me-1">
                                    Rejeitar
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr v-else>
                        <th>Taxa de juros</th>
                        <td>{{ emprestimo.taxa_juros }}</td>
                    </tr>
                </tbody>
            </TabelaPadrao>
            <Alerta v-if="mensagemDeErro" :texto="mensagemDeErro" />
        </FundoPadrao>
    </main>
    <FooterPadrao />
</template>

<script setup>

// Componentes:
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';
import MsgErro from '../../components/shared/MsgErro.vue';

// Outros
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import EmprestimoService from '../../service/EmprestimoService';
import { formataData, formataDinheiro } from '../../assets/js/formatar';
import Alerta from '../../components/shared/Alerta.vue';

const emprestimo = ref();
const cliente = ref();

const erro = ref({
    status: '',
    msg: ''
})

const emprestimoId = useRoute().params.id
EmprestimoService.detalha(emprestimoId)
    .then(res => {
        emprestimo.value = res;
        cliente.value = res.cliente;
    })
    .catch(err => {
        erro.value.msg = `Tivemos um problema ao carregar o empréstimo`;
        erro.value.status = err.response.status;
    })


const mensagemDeErro = ref('');
function analisaEmprestimo(aprovado) {
    EmprestimoService.analisa(aprovado, emprestimoId)
        .then(res => {
            emprestimo.value = res;
        })
        .catch(err => {
            console.log(err);
            mensagemDeErro.value = `Houve um problema ao analisar o empréstimo, tente novamente. [${err.response.status}]`
        })
}

</script>

<style>
</style>