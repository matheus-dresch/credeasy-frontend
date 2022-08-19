<template>
	<div id="app">
		<HeaderHome/>
		<main>
			<Banners />
            <Informacoes />
		</main>
        <Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderHome from '../components/home/HeaderHome.vue';
import Banners from '../components/home/banner/BannersPrincipais.vue';
import Informacoes from '../components/home/informacoes/Informacoes.vue';
import Footer from '../components/shared/footer/FooterPadrao.vue';

import '@/assets/css/home/style.css';

export default defineComponent({
    name: "HomeView",
    data() {
        return {
        };
    },
    components: { HeaderHome, Banners, Informacoes, Footer }
});
</script>

<style>

</style>
