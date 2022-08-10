<template>
    <HeaderSimples />
    <main class="p-3">
        <Loading :is-loading="isLoading" />
        <Formulario @submit="onSubmit" action="/" titulo="Olá! Seja bem-vindo novamente ;)">
            <div class="form-floating mb-2">
                <input v-model="email" :class="classeValidacao(metaEmail)" type="text"
                    class="form-control input-box text-light rounded-4" placeholder="voce@email.com">
                <label class="text-light">Email</label>
            </div>
            <div class="form-floating mb-2">
                <input v-model="senha" :class="classeValidacao(metaSenha)" type="password"
                    class="form-control input-box text-light rounded-4" placeholder="123">
                <label class="text-light">Senha</label>
            </div>
            <Alerta v-if="msgErro" :texto="msgErro" />
            <Botao titulo="Entrar" />
            <div class="d-flex flex-column align-items-center">
                <LinkFormulario titulo="Esqueci a senha" url="/" />
                <LinkFormulario titulo="Não sou cliente" url="/" />
            </div>
        </Formulario>

    </main>
    <FooterPadrao />
</template>

<script setup>
import HeaderSimples from '../components/shared/headers/HeaderSimples.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';
import Formulario from '../components/shared/formulario/Formulario.vue';

import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Botao from '../components/shared/formulario/Botao.vue';
import LinkFormulario from '../components/shared/formulario/LinkFormulario.vue';
import http from '../http';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Loading from '../components/shared/Loading.vue';
import Alerta from '../components/shared/Alerta.vue';

function classeValidacao(meta) {
    if (!meta.validated) return '';
    return meta.valid ? 'is-valid' : 'is-invalid';
}

const schema = yup.object({
    email: yup.string().required().email().label('O email'),
    senha: yup.string().required().min(8).max(64).label('A senha'),
})

const { handleSubmit } = useForm({
    validationSchema: schema
})

const { value: email, meta: metaEmail } = useField('email');
const { value: senha, meta: metaSenha } = useField('senha');

const store = useStore();
const router = useRouter();

const isLoading = ref(false);
const msgErro = ref('');

const onSubmit = handleSubmit(values => {
    isLoading.value = true;
    http.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(() => store.dispatch('efetuarLogin', values))
        .then(() => router.push({ name: 'cliente' }))
        .catch(err => {
            if (err.response.status === 401) {
                msgErro.value = 'Email ou senha inválidos';
                metaEmail.valid = false;
                metaSenha.valid = false;
            }
        })
        .finally(() => isLoading.value = false);
});

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