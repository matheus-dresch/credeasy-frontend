<template>
    <HeaderCliente />
    <main class="p-3">
        <Formulario titulo="Solicite um novo empréstimo" action="/">
            <InputBox titulo="Nome do empréstimo" placeholder="Carro novo" nome="nome_emprestimo" />
            <InputBox titulo="Valor do empréstimo" tipo="number" placeholder="R$ 1.500,00" nome="valor" />
            <InputBox titulo="Quantidade de parcelas" tipo="number" step="0.1" placeholder="6" nome="qtd_parcelas" />
    
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
import InputBox from '../../components/shared/formulario/InputBox.vue';
import Botao from '../../components/shared/formulario/Botao.vue';
import LinkFormulario from '../../components/shared/formulario/LinkFormulario.vue';
import FooterPadrao from '../../components/shared/footer/FooterPadrao.vue';

</script>

<style>
</style>