import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    number: 2,
}

const getters = {
    number: state => state.number += 10,
}

const mutations = {
    add: (state, val) => (state.number += val),

    reduce: state => {
        if (state.number <= 0) return;

        return state.number--;
    }
};

const actions = {
    addAction: ({ commit }) => commit('add', 10),

    reduceAction: ({ commit }) => commit('reduce'),
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});