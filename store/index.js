import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      pixelRatio: null,
      touchDevice: false,
    },
    mutations: {},
  });
};

export default createStore;
