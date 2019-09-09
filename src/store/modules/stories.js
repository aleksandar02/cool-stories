import stories from '../../data/storyData';
import store from '../store';

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
      if (x.id == story_id) {
        x.favourite = true;
        return true;
      }
    })

    state.favourites.unshift(favourite);
  },
  'REMOVE_FROM_FAVOURITES'(state, story_id) {
    const favourite = state.stories.find(x => {
      if(x.id == story_id) {
        x.favourite = false;
        return true;
      }
    })

    var index = state.favourites.findIndex(function (favourite) {
      return favourite.id === story_id;
    });
    
    if (index !== -1) {
      state.favourites.splice(index, 1);
    }
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
  },
  removeFromFavourites: ({ commit }, story_id) => {
    // Call server

    // If: Successfully removed
    commit('REMOVE_FROM_FAVOURITES', story_id);
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
  },
  myStories: state => {
    const user = store.getters.getUser;
    const myStories = state.stories.filter(x => x.username == user.username);

    return myStories;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};