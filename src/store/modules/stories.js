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
    state.stories.unshift(story);
  },
  'ADD_TO_FAVOURITES'(state, story_id) {
    const favourite = state.stories.find(x => {
      if(x.id == story_id) {
        x.favourite = true;
        return true;
      }
    })

    state.favourites.unshift(favourite);
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

    // If: Successfull server status
    commit('ADD_TO_FAVOURITES', story_id);
  }

};

const getters = {
  stories: state => {
    return state.stories;
  },
  story: (state) => (story_id) => {
    return state.stories.find(x => x.id == story_id);
  },
  favourites: state => {
    return state.favourites;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};