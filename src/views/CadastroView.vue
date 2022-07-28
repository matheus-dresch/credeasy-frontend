<template>
    <HeaderSimples />
    <main class="p-3">
        <Formulario titulo="Olá! Seja bem-vindo(a) novamente" action="/">
            <p>Dados pessoais:</p>
            <InputBox titulo="Nome" placeholder="Fulano Silva" :required="true" nome="nome" />
            <InputBox titulo="CPF" placeholder="XXX.XXX.XXX-XX" :required="true" nome="cpf" />
            <InputBox titulo="Celular" placeholder="(XX) X XXXX-XXXX" :required="true" nome="celular" />
            <InputBox titulo="Profissão" placeholder="Pedreiro" :required="true" nome="profissao" />
            <InputBox titulo="Renda" placeholder="R$ 1.000,00" :required="true" nome="renda" />

            <p>Endereço:</p>
            <InputBox titulo="CEP" placeholder="XXXXX-XXX" :required="true" nome="cep" />
            <InputBox titulo="Estado" placeholder="RS" :required="true" nome="estado" />
            <InputBox titulo="Cidade" placeholder="Cidade da floresta" :required="true" nome="cidade" />
            <InputBox titulo="Bairro" placeholder="Bairro das flores" :required="true" nome="bairro" />
            <InputBox titulo="Rua" placeholder="Rua da amora" :required="true" nome="rua" />
            <InputBox titulo="Nº da casa" placeholder="5577" :required="true" nome="numcasa" />
            
            <p>Usuário:</p>
            <InputBox titulo="E-mail" placeholder="voce@email.com" :required="true" nome="email" />
            <InputBox titulo="Senha" placeholder="••••••••" :required="true" nome="senha" />
            <InputBox titulo="Repita a senha" placeholder="••••••••" :required="true" />

            <Botao titulo="Cadastrar" />
            <div class="d-flex flex-column align-items-center">
                <LinkFormulario url="/entrar" titulo="Já sou cliente" />
            </div>
        </Formulario>
    </main>
    <FooterPadrao />
</template>

<script setup>
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
</style>