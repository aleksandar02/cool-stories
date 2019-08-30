import Home from './components/Home.vue';
import Story from './components/story/Story.vue';
import AddStory from './components/story/AddStory.vue';
import EditStory from './components/story/EditStory.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/story', component: Story },
  { path: '/addStory', component: AddStory },
  { path: '/editStory/:id', component: EditStory }
];