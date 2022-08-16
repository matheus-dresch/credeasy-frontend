<template>
    <div class="col-12 mb-2 px-1">
        <article class="custom-card col-12 rounded p-3">
            <h5 class="b-block text-light m-0 mb-2">&#8250; Seus empréstimos
                <select id="filtro_status" class="rounded ms-2 fs-6">
                    <option selected value="">Todos</option>
                    <option value="APROVADO">Aprovados</option>
                    <option value="QUITADO">Quitados</option>
                    <option value="REJEITADO">Rejeitados</option>
                    <option value="SOLICITADO">Solicitados</option>
                </select>
            </h5>
            <table class="table text-light">
                <slot></slot>
            </table>
        </article>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style>
</style>