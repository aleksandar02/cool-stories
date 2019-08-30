import Vue from 'vue';
import Vuex from 'vuex';
import stories from './modules/stories';
import comments from './modules/comments';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stories,
    comments,
    users
  }
});