<template>
    <HeaderCliente />
    <main class="p-3 d-flex justify-content-center">
        <FundoPadrao size="50">
            <MsgErro :erro="erro" />
        </FundoPadrao>
    </main>
    <FooterPadrao />
</template>

<script setup>
import HeaderCliente from '../components/shared/headers/HeaderCliente.vue';
import FooterPadrao from '../components/shared/footer/FooterPadrao.vue';
import FundoPadrao from '../components/shared/FundoPadrao.vue';
import MsgErro from '../components/shared/MsgErro.vue';

const erro = {
    msg: "Parece que você chegou na borda da terra plana",
    status: "404"
}

</script>

<style>
</style>