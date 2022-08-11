<template>
    <footer class="footer mt-auto container-fluid d-block">
        <section id="scrollspyHeading3" class="container-fluid d-grid">
            <div class="row">
                <div class="col-12 col-lg-3 p-3 d-flex align-items-center justify-content-center">
                    <h3 id="header-title" class="m-0 text-light">CredEasy</h3>
                </div>
                <Link titulo="Termos legais" />
                <Link titulo="Termos de uso" />
                <Link titulo="Privacidade" />
                <div class="col-12 col-lg-3 d-flex justify-content-center my-3">
                    <IconeSocial :icone="facebook" />
                    <IconeSocial :icone="twitter" />
                    <IconeSocial :icone="youtube" />
                    <IconeSocial :icone="instagram" />
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <span class="text-secondary" style="font-size: .75rem;">Todos direitos reservados CredEasy&copy;
                        2022.</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup>
import IconeSocial from './IconeSocial.vue';
import Link from './LinkFooter.vue';

import facebook from '@/assets/icons/facebook.svg'
import twitter from '@/assets/icons/twitter.svg'
import youtube from '@/assets/icons/youtube.svg'
import instagram from '@/assets/icons/instagram.svg'

</script>

<style scoped>
footer {
    background-color: #000;
}
</style>