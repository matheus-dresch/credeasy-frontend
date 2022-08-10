<template>
    <HeaderCliente />
    <main class="p-3">
        <Loading :is-loading="isLoading"/>
        <Formulario @submit="onSubmit" titulo="Solicite um novo empréstimo" action="/">
            <div class="form-floating mb-2">
                <input v-model="nome" type="text" :class="classeValidacao(metaNome)" class="form-control input-box text-light rounded-4" placeholder="Computador novo"
                    required minlength="3">
                <label class="text-light">Nome do empréstimo</label>
            </div>
            <div class="form-floating mb-2">
                <input v-model="valor" v-money="money" type="text" :class="classeValidacao(metaValor)" class="form-control input-box text-light rounded-4"
                    placeholder="R$ 1.000,00" required>
                <label class="text-light">Valor do empréstimo</label>
            </div>
            <div class="form-floating mb-2">
                <input v-model="qtd_parcelas" type="number" :class="classeValidacao(metaParcelas)" class="form-control input-box text-light rounded-4" placeholder="5" min="1"
                    :max="quantidadeMaximaParcelas">
                <label class="text-light">Quantidade de parcelas</label>
            </div>
            <div class="form-floating mb-2">
                <input :value="valorParcela" disabled v-money="money" type="text" class="form-control input-box-read fw-bold text-light rounded-4">
                <label class="text-light fw-bold">Valor estimado das parcelas</label>
            </div>
            <div class="form-floating mb-2">
                <input :value="valorEmprestimo" disabled v-money="money" type="text" class="form-control input-box-read text-light fw-bold rounded-4">
                <label class="text-light fw-bold">Valor estimado do empréstimo</label>
            </div>
            <Alerta v-if="mensagemDeErro" :texto="mensagemDeErro" />

            <Botao titulo="Solicitar" />
            <div class="d-flex flex-column align-items-center">
                <LinkFormulario url="/cliente" titulo="Voltar ao dashboard" />
            </div>
        </Formulario>
    </main>
    <FooterPadrao />
</template>

<script setup>
import HeaderCliente from '../../components/shared/headers/HeaderCliente.vue';
import Formulario from '../../components/shared/formulario/Formulario.vue';
import Botao from '../../components/shared/formulario/Botao.vue';
import LinkFormulario from '../../components/shared/formulario/LinkFormulario.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';
import { computed, onMounted, ref } from 'vue';
import * as yup from 'yup';
import router from '../../router';

import '@/assets/css/input.css'
import { useField, useForm } from 'vee-validate';
import EmprestimoService from '../../service/EmprestimoService';
import Alerta from '../../components/shared/Alerta.vue';
import Loading from '../../components/shared/Loading.vue';

function classeValidacao(meta) {
    if (!meta.validated) return '';
    return meta.valid ? 'is-valid' : 'is-invalid';
}

const money = {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    precision: 2,
};

const quantidadeMaximaParcelas = computed(() => {
    if (!valor.value) return
    let valorInteiro = valor.value.replace(/[\D]/g, '') / 100 * 1.1;

    for (let i = 1; i <= 120; i++) {
        if (valorInteiro / i < 200) return i - 1
    }

    return 72;
});

const valorParcela = computed(() => {
    if (!valor.value) return 0;
    let valorInteiro = valor.value.replace(/[\D]/g, '') / 100 * 1.1;
    
    return (valorInteiro / qtd_parcelas.value).toFixed(2)
});

const valorEmprestimo = computed(() => {
    if (!valor.value) return 0;
    let valorInteiro = valor.value.replace(/[\D]/g, '') / 100 * 1.1;
    return valorInteiro.toFixed(2);
});

const schema = yup.object({
    nome: yup.string().required().min(3),
    valor: yup.string().required(),
    qtd_parcelas: yup.string().required()
})

const { handleSubmit } = useForm({
    validationSchema: schema
})

const { value: nome, meta: metaNome } = useField('nome')
const { value: valor, meta: metaValor } = useField('valor')
const { value: qtd_parcelas, meta: metaParcelas } = useField('qtd_parcelas')

const mensagemDeErro = ref('');
const isLoading = ref(false);

const onSubmit = handleSubmit(values => {
    isLoading.value = true;
    EmprestimoService.registra(values)
        .then(res => router.push({ name: 'detalhar-emprestimo', params: { id: res.id } }))
        .catch(err => {
            console.log(err);
            mensagemDeErro.value = 'Houve um problema ao solicitar o empréstimo, tente novamente.'
            isLoading.value = false;
        })
});


</script>

<style>
</style>