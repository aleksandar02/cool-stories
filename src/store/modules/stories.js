import stories from '../../data/storyData';

const state = {
  stories: [],
  favourites: []
};

const mutations = {
  'SET_STORIES'(state, stories) {
    state.stories = stories;
  },
  'CREATE_STORY'(state, story) {
    state.stories.push(story);
  }
};

const actions = {
  initStories: ({ commit }) => {
    // Call server

    commit('SET_STORIES', stories);
  },
  createStory: ({ commit }, story) => {
    // Call server 

    commit('CREATE_STORY', story);
  },
  addToFavourites: ({ commit }, story_id) => {
    // Call server

    commit('ADD_TO_FAVOURITES', story);
  }

};

const getters = {
  stories: state => {
    return state.stories;
  },
  story: (state) => (story_id) => {
    return state.stories.find(x => x.id == story_id);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};