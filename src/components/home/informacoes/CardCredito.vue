<template>
    <div class="col-12 col-lg-auto card product-card text-light" style="width: 15rem;">
        <div class="card-header d-flex px-1 border-secondary">
            <span class="material-symbols-outlined">
                {{ card.icone }}
            </span>
            <span class="text-center w-100">{{ card.titulo }}</span>
        </div>
        <div class="card-body text-center">
            {{ card.descricao }}
        </div>
    </div>
</template>

<script lang='ts'>

export default ({
    props: {
        card: {
            type: Object,
            required: true
        }
    }
});
</script>

<style>
</style>