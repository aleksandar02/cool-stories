<template>
  <div
    class="flex items-center justify-between border-teal-400 border-b-4 border-r-4 bg-white text-gray-800 py-6 rounded-lg shadow-md px-4"
  >
    <router-link
      :to="{ name: 'story-details', params: { id: story.id } }"
      tag="h1"
      class="text-2xl tracking-wide font-light cursor-pointer"
    >{{ story.name }} <span class="text-teal-400">&bull;</span> {{ story.username }}</router-link>

    <div>
      <i @click="removeFromFavourites(story.id)" class="fas fa-trash text-teal-400 hover:text-teal-500 transition-350 mr-6 text-2xl cursor-pointer"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["story"],
  methods: {
    removeFromFavourites(story_id) {
      this.$store.dispatch('removeFromFavourites', story_id);
    }
  }
};
</script>

<style>
</style>