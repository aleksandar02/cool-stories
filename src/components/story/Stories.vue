<template>
  <div>
    <story-item v-for="story in stories" :key="story.id" :story="story"></story-item>
  </div>
</template>

<script>
import StoryItem from './StoryItem.vue';
import { mapGetters } from 'vuex';

export default {
  props: ['stories'],
  components: {
    'storyItem': StoryItem
  },
  computed: {
    
  },
  methods: {
  
  }
}
</script>

<style>

</style>