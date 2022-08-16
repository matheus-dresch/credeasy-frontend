<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <FundoPadrao size="100">
            <MsgErro v-if="erro.status" :erro="erro" />
            <TabelaPadrao titulo="Empréstimos para análise">
                <thead>
                    <th class="w-15">Nome</th>
                    <th class="w-15">Valor</th>
                    <th class="w-15">Parcelas</th>
                    <th class="w-15">Data</th>
                    <th class="w-15">Status</th>
                </thead>
                <tbody>
                    <tr v-if="temEmprestimos" v-for="emprestimo of emprestimosParaAnalise">
                        <td>{{ emprestimo.nome }}</td>
                        <td>{{ formataDinheiro(emprestimo.valor) }}</td>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                        <td>{{ formataData(emprestimo.data_solicitacao, true) }}</td>
                        <td>{{ emprestimo.status }}</td>
                        <td>
                            <LinkRoxo titulo="Analisar"
                                :url="{ name: 'analisar-emprestimo', params: { id: emprestimo.id } }" />
                        </td>
                    </tr>
                    <tr v-else>
                        <td colspan="7">
                            <h3 class="text-center">Não há nada para analisar :)</h3>
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
import HeaderCliente from '../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';
import TabelaPadrao from '../components/shared/TabelaPadrao.vue';
import FundoPadrao from '../components/shared/FundoPadrao.vue';
import LinkRoxo from '../components/shared/LinkRoxo.vue';
import MsgErro from '../components/shared/MsgErro.vue';

// Outros:
import { ref } from 'vue';
import { formataData, formataDinheiro } from '../assets/js/formatar';
import EmprestimoService from '../service/EmprestimoService';
import { computed } from '@vue/reactivity';

const temEmprestimos = computed(() => emprestimosParaAnalise.value.length > 0);

const emprestimosParaAnalise = ref([]);
const todosEmprestimos = ref([]);

const erro = ref({
    status: '',
    msg: ''
})

EmprestimoService.lista({ todos: true })
    .then(res => {
        emprestimosParaAnalise.value = res.emprestimos_analise;
    })
    .catch(err => {
        erro.value.msg = `Tivemos um problema ao carregar os empréstimos`;
        erro.value.status = err.response.status;
        console.log(err.response.data);
    })

</script>

<style>
.w-15 {
    width: 15%;
}
</style>