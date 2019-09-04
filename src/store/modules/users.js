import user from '../../data/userData';

const state = {
  
};

const mutations = {
  'USER_LOGGED_IN'(state) {
    state.isLoggedIn = true;
  },
  'USER_LOGGED_OUT'(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  'SET_USER_DATA'(state, loggedInUser) {
    state.user = loggedInUser;
    state.isLoggedIn = true;
  }
};

const actions = {
  login: ({ commit }, payload) => {
    // Call server

    if(payload.userName == user.userName && payload.email == user.email) {
      // commit('USER_LOGGED_IN');

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
};

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn;
  },
  getUser: state => {
    return state.user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};