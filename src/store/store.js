import Vue from 'vue';
import Vuex from 'vuex';
import stories from './modules/stories';
import comments from './modules/comments';

import user from '../data/userData';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    'USER_LOGGED_IN'(state) {
      state.isLoggedIn = true;
    },
    'SET_USER_DATA'(state, loggedInUser) {
      state.user = loggedInUser;
    },
    'USER_LOGGED_OUT'(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  actions: {
    login: ({ commit }, payload) => {
      // Call server

      if(payload.username == 'Aleksandar' && payload.email == 'aca@gmail.com') {
        commit('USER_LOGGED_IN');
  
        // Call server for logged in user
  
        const user = {
          id: 1,
          username: 'Aleksandar',
          email: 'aca@gmail.com'
        }
        commit('SET_USER_DATA', user);
      }
    },
    logout: ({ commit }) => {
      // Call server
  
      commit('USER_LOGGED_OUT');
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    getUser: state => {
      return state.user;
    }
  },
  modules: {
    stories,
    comments
  }
});