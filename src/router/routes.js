import store from '../store/store';

import Home from '.././components/Home.vue';
import Story from '.././components/story/Story.vue';
import AddStory from '.././components/story/AddStory.vue';
import EditStory from '.././components/story/EditStory.vue';
import SignIn from '.././components/user/SignIn.vue';
// import SignUp from '.././components/user/SignUp.vue';
import StoryDetails from '.././components/story/StoryDetails.vue';
import FavouriteStories from '.././components/story/FavouriteStories.vue';


export const routes = [
  { path: '/', name: 'home', component: Home },
  // { path: '/signup', name: 'signup', component: SignUp },
  { path: '/story', name: 'story', component: Story },
  { path: '/story-details/:id', name: 'story-details', component: StoryDetails },
  { 
    path: '/favourite-stories',
    name: 'favourite-stories',
    component: FavouriteStories,
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == true) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/add-story',
    name: 'add-story',
    component: AddStory,
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == true) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == false) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/edit-story',
    component: EditStory,
    name: 'edit-story',
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == true) {
        next()
      } else {
        next('/signin')
      }
    }
  }
];