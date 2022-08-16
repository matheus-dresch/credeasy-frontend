<template>
    <div :id="'toast_' + notificacao.index" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">{{ notificacao.titulo }}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{ notificacao.mensagem }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useNotificacaoStore } from '../../stores/NotificacaoStore'
import { Toast } from 'bootstrap'

const props = defineProps({
    notificacao: {
        type: Object
    }
})

onMounted(() => {
    const el = document.querySelector(`#toast_${props.notificacao.index}`)
    const elementoToast = new Toast(el);
    elementoToast.show();

    el.addEventListener('hidden.bs.toast', () => {
        useNotificacaoStore().remove(props.notificacao)
    })
})
</script>