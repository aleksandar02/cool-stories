import stories from '../../data/storyData';

const state = {
  stories: []
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
    commit('SET_STORIES', stories);
  },
  createStory: ({ commit }, story) => {
    // Call server 

    commit('CREATE_STORY', story);
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