import VueX from 'vuex';
import createdPersistedState from 'vuex-persistedstate';
import http from './http';
import router from './router';

const state = {
    nome: '',
    gestor: undefined,
    token: ''
}

const mutations = {
    LOGA_USUARIO(state, { nome, gestor, token }) {
        state.nome = nome
        state.gestor = gestor
        state.token = token
    },

    DESLOGA_USUARIO(state) {
        state.nome = ''
        state.gestor = false
        state.token = ''
    }
}

const actions = {
    efetuarLogin({ commit }, { email, senha }) {
        return new Promise((resolve, reject) => {
            http.post('login', { email, senha })
                .then(res => {
                    commit('LOGA_USUARIO', res.data);
                    resolve('Usuário logado.');
                })
                .catch(err => {
                    console.error('Erro ao tentar fazer o login: ', err);
                    reject(err);
                })
        })
    },

    efetuarLogout({ commit }) {
        commit('DESLOGA_USUARIO');
        router.push({ name: 'login' })
    }
}

const getters = {
    usuarioEhGestor: state => state.gestor,
    usuario: state => state.nome,
    usuarioEstaLogado: state => Boolean(state.token)
}

export default new VueX.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [createdPersistedState()]
})