<template>
    <HeaderSimples />
    <main class="p-3">
        <Formulario @submit="onSubmit" action="/" titulo="Olá! Seja bem-vindo ;)">
            <h3 class="text-white">Seus dados</h3>
            <div class="form-floating mb-2">
                <input v-model="nome" :class="classeValidacao(metaNome)" type="text" placeholder="voce@email.com"
                    class="form-control input-box text-light rounded-4">
                <label class="text-light">Nome completo</label>
                <div class="invalid-feedback">{{ errors.nome }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="cpf" :class="classeValidacao(metaCpf)" v-mask-cpf maxlength="14" minlength="14"
                    type="text" inputmode="numeric" class="form-control input-box text-light rounded-4"
                    placeholder="000.000.000-00">
                <label class="text-light">CPF</label>
                <div class="invalid-feedback">{{ errors.cpf }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="celular" :class="classeValidacao(metaCelular)" v-mask-phone.br maxlength="16"
                    minlength="16" type="text" class="form-control input-box text-light rounded-4"
                    placeholder="(00) 0 0000-0000">
                <label class="text-light">Celular</label>
                <div class="invalid-feedback">{{ errors.celular }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="profissao" :class="classeValidacao(metaProfissao)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="Pedreiro">
                <label class="text-light">Profissão</label>
                <div class="invalid-feedback">{{ errors.profissao }}</div>
            </div>
            <div class="form-floating mb-4">
                <input v-money="money" id="renda" v-model="renda" :class="classeValidacao(metaRenda)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="R$ 2.000,00">
                <label class="text-light">Renda</label>
                <div class="invalid-feedback">{{ errors.renda }}</div>
            </div>

            <h3 class="text-white">Seu endereço</h3>
            <div class="form-floating mb-2">
                <input v-model="cep" :class="classeValidacao(metaCep)" @blur="buscaCep($event.target)" v-mask-cep
                    maxlength="10" minlength="10" type="text" class="form-control input-box text-light rounded-4"
                    placeholder="00000-000">
                <label class="text-light">CEP</label>
                <div class="invalid-feedback">{{ errors.cep }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="uf" :class="classeValidacao(metaUf)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="XX">
                <label class="text-light">Estado</label>
                <div class="invalid-feedback">{{ errors.uf }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="cidade" :class="classeValidacao(metaCidade)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="Cidade da mandioca">
                <label class="text-light">Cidade</label>
                <div class="invalid-feedback">{{ errors.cidade }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="bairro" :class="classeValidacao(metaBairro)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="Bairro do aipim">
                <label class="text-light">Bairro</label>
                <div class="invalid-feedback">{{ errors.bairro }}</div>
            </div>
            <div class="form-floating mb-2">
                <input v-model="rua" :class="classeValidacao(metaRua)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="Rua da pamonha">
                <label class="text-light">Rua</label>
                <div class="invalid-feedback">{{ errors.rua }}</div>
            </div>
            <div class="form-floating mb-4">
                <input v-model="numcasa" :class="classeValidacao(metaNumCasa)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="7184">
                <label class="text-light">Nº da casa</label>
                <div class="invalid-feedback">{{ errors.numcasa }}</div>
            </div>

            <h3 class="text-light">Quase lá</h3>
            <div class="form-floating mb-2">
                <input v-model="email" :class="classeValidacao(metaEmail)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="voce@email.com">
                <label class="text-light">Email</label>
                <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="form-floating mb-2">
                <input autocomplete="off" v-model="senha" :class="classeValidacao(metaSenha)" type="password"
                    class="form-control input-box text-light rounded-4" placeholder="123">
                <label class="text-light">Senha</label>
                <div class="invalid-feedback">{{ errors.senha }}</div>
            </div>
            <div class="form-floating mb-2">
                <input autocomplete="off" v-model="senhaconfirm" :class="classeValidacao(metaSenhaConfirm)"
                    type="password" class="form-control input-box text-light rounded-4" placeholder="123">
                <label class="text-light">Confirme a senha</label>
                <div class="invalid-feedback">{{ errors.senhaconfirm }}</div>
            </div>

            <Botao titulo="Cadastrar-se" />
            <div class="d-flex justify-content-center">
                <LinkFormulario titulo="Já sou cliente" :url="{ name: 'entrar' }" />
            </div>
        </Formulario>
    </main>
    <FooterPadrao />
</template>

<script setup>
import HeaderSimples from '../components/shared/headers/HeaderSimples.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';
import Formulario from '../components/shared/formulario/Formulario.vue';

import { cpf as cpfval } from 'cpf-cnpj-validator';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Botao from '../components/shared/formulario/Botao.vue';
import LinkFormulario from '../components/shared/formulario/LinkFormulario.vue';
import axios from 'axios';
import http from '../http';
import { useNotificacaoStore } from '../stores/NotificacaoStore';
import { useRouter } from 'vue-router';

function classeValidacao(meta) {
    if (!meta.validated) return '';
    return meta.valid ? 'is-valid' : 'is-invalid';
}

function buscaCep(el) {
    let cep = el.value.replace(/[\D]/, '');

    axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => {
            let dados = res.data;
            if (dados.erro) throw new Error('O CEP é inválido');

            uf.value = dados.uf;
            cidade.value = dados.localidade
            if (dados.bairro) bairro.value = dados.bairro
        })
        .catch(err => {
            console.log(err);
        })

}

const money = {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    precision: 2,
    masked: false
}

const schema = yup.object({
    uf: yup.string().required().min(2).label('O estado'),
    cep: yup.string().required().min(10).label('O CEP'),
    cpf: yup.string().required().test('valida-cpf', 'O CPF é inválido', value => cpfval.isValid(value)).label('O CPF'),
    rua: yup.string().required().min(3).label('A rua'),
    nome: yup.string().required().min(3).label('O nome'),
    email: yup.string().required().email().label('O email'),
    renda: yup.string().required().label('A renda'),
    senha: yup.string().required().min(8).max(64).label('A senha'),
    bairro: yup.string().required().min(1).max(128).label('O bairro'),
    cidade: yup.string().required().min(3).max(30).label('A cidade'),
    celular: yup.string().required().min(16).label('O Nº de celular'),
    numcasa: yup.string().required().min(1).label('O Nº da casa'),
    profissao: yup.string().required().min(3).label('A profissão'),
    senhaconfirm: yup.string().required('Você deve confirmar sua senha').test('confirma-senha', 'As senhas devem ser iguais', value => senha.value === value)
})

const { handleSubmit, errors } = useForm({
    validationSchema: schema
})

const { value: uf, meta: metaUf } = useField('uf');
const { value: cep, meta: metaCep } = useField('cep');
const { value: cpf, meta: metaCpf } = useField('cpf');
const { value: rua, meta: metaRua } = useField('rua');
const { value: nome, meta: metaNome } = useField('nome');
const { value: email, meta: metaEmail } = useField('email');
const { value: renda, meta: metaRenda } = useField('renda');
const { value: senha, meta: metaSenha } = useField('senha');
const { value: bairro, meta: metaBairro } = useField('bairro');
const { value: cidade, meta: metaCidade } = useField('cidade');
const { value: celular, meta: metaCelular } = useField('celular');
const { value: numcasa, meta: metaNumCasa } = useField('numcasa');
const { value: profissao, meta: metaProfissao } = useField('profissao');
const { value: senhaconfirm, meta: metaSenhaConfirm } = useField('senhaconfirm');

function onInvalidSubmit({ values, errors, results }) {
    console.log(values); // current form values
    console.log(errors); // a map of field names and their first error message
    console.log(results); // a detailed map of field names and their validation results
}

const router = useRouter();

const onSubmit = handleSubmit(values => {
    http.post('cadastro', { values })
        .then(res => {
            useNotificacaoStore().notifica({
                titulo: 'Bem vindo! :)',
                mensagem: 'Entre na sua conta para continuar'
            });
            router.push({ name: 'entrar' })
        })
        .catch(err => console.log(err))
}, onInvalidSubmit);

</script>

<style scoped>
@media screen and (max-width: 520px) {
    body {
        padding: 0;
    }

    form {
        width: 100%;
    }

    .input-box {
        width: 100%;
    }
}

form p {
    margin: 25px 0 10px;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-decoration: underline;
    font-size: 18px;
}

.input-box {
    background-color: #5555 !important;
    outline: #9995;
}
</style>