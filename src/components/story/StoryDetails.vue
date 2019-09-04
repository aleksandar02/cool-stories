<template>
  <div class="flex container mx-auto">
    <div class="w-3/4 container my-6 px-12 py-4 mx-2 rounded-lg shadow-lg z-10">
      <div class="py-4">
        <h1 class="text-5xl text-gray-700 font-semibold tracking-wide">{{ story.name }}</h1>
        <h1 class="text-2xl text-gray-500 font-light">{{ story.username }} &bull; {{ story.date }}</h1>
        <p class="text-gray-600 my-8 leading-relaxed tracking-wide">{{ story.storyText }}</p>

        <button
          class="border-1 border-teal-600 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-450 py-2 px-4 text-xl font-light tracking-wider"
          v-if="this.$store.state.isLoggedIn"
        >
          Favourites
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
    <div class="w-1/4 container my-6 mx-2 px-6 py-6 rounded-lg shadow-lg">
      <h1 class="text-2xl text-gray-700 font-semibold tracking-wide">Recommended list</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story_id: this.$route.params.id
    };
  },
  computed: {
    story() {
      return this.$store.getters.story(this.story_id);
    }
  }
};
</script>

<style>
</style>