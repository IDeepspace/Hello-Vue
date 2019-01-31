import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 2,
    showCount: false,
  },
  mutations: {
    increment: (state) => {
      const newState = state;
      newState.count += 1;
      return { ...state, newState };
    },
    decrement: (state) => {
      const newState = state;
      newState.count -= 1;
      return { ...state, newState };
    },
    toggle: (state) => {
      const newState = state;
      newState.showCount = !newState.showCount;
      return { ...state, newState };
    },
  },
});

export default store;
