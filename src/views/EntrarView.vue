<template>
    <HeaderSimples />
    <main class="p-3">
        <Formulario titulo="Olá! Seja bem-vindo(a) novamente" action="/">
            <InputBox tipo="email" titulo="E-mail" placeholder="voce@email.com" :required="true" nome="email" />
            <InputBox tipo="password" titulo="Senha" placeholder="••••••••" :required="true" nome="senha" />
            <Botao titulo="Entrar" />
            <div class="d-flex flex-column align-items-center">
                <LinkFormulario url="/recuperar" titulo="Esqueci minha senha" />
                <LinkFormulario url="/cadastro" titulo="Não sou cliente" />
            </div>
        </Formulario>
    </main>
    <FooterPadrao />
</template>

<script setup>

import { ref, onMounted } from 'vue';

import InputBox from '../components/shared/formulario/InputBox.vue';
import Formulario from '../components/shared/formulario/Formulario.vue';
import Botao from '../components/shared/formulario/Botao.vue';
import LinkFormulario from '../components/shared/formulario/LinkFormulario.vue';
import HeaderSimples from '../components/shared/headers/HeaderSimples.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';

</script>

<style>
@media screen and (max-width: 520px) {
    body {
        padding: 0;
    }
}
</style>