<template>
    <section class="d-flex flex-column align-items-center">
        <form class="form" method="post">
            <h1>{{ titulo }}</h1>
            <slot></slot>
        </form>
    </section>
</template>

<script setup>

defineProps({
    titulo: {
        type: String,
        required: true
    },
})

</script>

<style scoped>
form {
    width: 500px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 25px 25px;
    border-radius: 10px;
    display: block;
    margin: auto;
}

form h1 {
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
}

@media screen and (max-width: 520px) {
    form {
        width: 100%;
    }
}
</style>