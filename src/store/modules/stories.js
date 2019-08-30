import stories from '../../data/storyData';

const state = {
  stories: []
};

const mutations = {
  'SET_STORIES'(state, stories) {
    state.stories = stories;
  }
};

const actions = {
  initStories: ({ commit }) => {
    commit('SET_STORIES', stories);
  }
};

const getters = {
  stories: state => {
    return state.stories;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};