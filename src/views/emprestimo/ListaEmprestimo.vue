<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center vld-parent">
        <loading v-model:active="isLoading" :is-full-page="true" color="#fff" background-color="#0009" />
        <FundoPadrao size="100">
            <MsgErro v-if="erro.status" :erro="erro" />
            <TabelaPadrao v-if="emprestimos" titulo="Lista de empréstimos">
                <thead>
                    <th class="w-15">Nome</th>
                    <th class="w-15">Valor</th>
                    <th class="w-15">Parcelas</th>
                    <th class="w-15">Data</th>
                    <th class="w-15">Status</th>
                </thead>
                <tbody>
                    <tr v-for="emprestimo of emprestimos">
                        <td>{{ emprestimo.nome }}</td>
                        <td>{{ formataDinheiro(emprestimo.valor) }}</td>
                        <td>{{ emprestimo.qtd_parcelas }}</td>
                        <td>{{ formataData(emprestimo.data_solicitacao) }}</td>
                        <td>{{ emprestimo.status }}</td>
                        <td><LinkRoxo :url="`/emprestimos/${emprestimo.id}`" /></td>
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
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import TabelaPadrao from '../../components/shared/TabelaPadrao.vue';
import FundoPadrao from '../../components/shared/FundoPadrao.vue';
import LinkRoxo from '../../components/shared/LinkRoxo.vue';
import MsgErro from '../../components/shared/MsgErro.vue';

// Outros:
import { ref } from 'vue';
import axios from 'axios';
import { formataData, formataDinheiro } from '../../assets/js/formatar';

const emprestimos = ref();
const isLoading = ref(true)
const erro = ref({
    status: '',
    msg: ''
})

axios.get('emprestimos')
    .then(res => {
        emprestimos.value = res.data
    })
    .catch(err => {
        erro.value.msg = `Tivemos um problema ao carregar os empréstimos`;
        erro.value.status = err.response.status;
    })
    .finally(() => isLoading.value = false);

</script>

<style>
.w-15 {
    width: 15%;
}
</style>