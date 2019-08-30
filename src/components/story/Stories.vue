<template>
  <div>
    <story-item v-for="story in stories" :key="story.id" :story="story"></story-item>
  </div>
</template>

<script>
import StoryItem from './StoryItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'storyItem': StoryItem
  },
  computed: {
    ...mapGetters([
      'stories'
    ])
  }
}
</script>

<style>

</style>