<template>
  <div
    class="my-4 flex justify-between items-center p-6 text-gray-800 text-xl font-normal tracking-wide bg-blue-100 rounded-lg shadow-md"
    :class="{ 'border-b-4': story.favourite, 'border-r-4': story.favourite, 'border-blue-300': story.favourite }"
  >
    <div>
      <router-link :to="{ name: 'story-details', params: { id: story.id }}">
        <h1 class="text-2xl font-light text-gray-800 tracking-wide">
          {{ story.name }}
          <span class="text-teal-400 text-lg">&bull;</span>
          {{ story.username }}
          <span class="text-teal-400 text-lg">&bull;</span>
          {{ story.date }}
        </h1>
      </router-link>
    </div>
    <div v-if="isLoggedIn" class="flex items-center">
      <i
        @click="addToFavourites(story.id)"
        v-if="story.favourite == false"
        class="far text-2xl text-red-400 hover:text-red-500 transition-350 fa-heart mr-4 cursor-pointer"
      ></i>
      <i
        @click="removeFromFavourites(story.id)"
        v-if="story.favourite"
        class="fas text-2xl text-red-500 hover:text-red-400 transition-350 fa-heart mr-4 cursor-pointer"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["story"],

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    addToFavourites(story_id) {
      this.$store.dispatch("addToFavourites", story_id);

      this.message = "Added to favourites!";

      setTimeout(
        function() {
          this.alert = false;
        }.bind(this),
        3000
      );
    },
    removeFromFavourites(story_id) {
      this.$store.dispatch("removeFromFavourites", story_id);

      this.message = "Removed from favourites!";

      setTimeout(
        function() {
          this.alert = false;
        }.bind(this),
        3000
      );
    }
  }
};
</script>

<style>
</style>