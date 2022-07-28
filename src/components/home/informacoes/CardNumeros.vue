<template>
    <div class="col-md-12 col-lg-4 card info-card px-1" style="max-width: 11em;">
        <div class="card-header text-center border-0">
            <h4 class="purple fw-bold m-0">{{ card.numero }}</h4>
            <h5 class="purple fw-bold m-0">{{ card.unidade }}</h5>
        </div>
        <div class="card-body pt-0">
            <h6 class="card-text text-light text-center">{{ card.descricao }}</h6>
        </div>
    </div>
</template>

<script lang='ts'>

export default ({
    name: 'CardNumeros',
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