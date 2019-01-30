import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 2,
  },
  mutations: {
    increment: state => (state.count += 1), // eslint-disable-line
    decrement: state => (state.count -= 1), // eslint-disable-line
  },
});

export default store;
