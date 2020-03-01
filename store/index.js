import { db, auth } from '../plugins/firebaseConfig'

const log = console.log;
const state = () => ({
    error: null,
    list: ['Hola', 'que hase']
});

const mutations = {
    SET_ERROR(state, payload) {
        state.error = payload
    }
}

const actions = {
    nuxtServerInit() {
        log("Hola mundo");
    },
    iniciarSesion({ commit }, { email, password }) {
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            commit('SET_ERROR', error.message)
        });
    },
    login({ commit }, payload) {
        console.log(payload)
    }
}

const getters = {}

export const strict = false
export { state, mutations, actions, getters }
export { db }