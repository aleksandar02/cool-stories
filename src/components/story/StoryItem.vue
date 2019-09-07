<template>
  <div
    class="my-4 flex justify-between items-center p-6 text-gray-800 text-xl font-normal tracking-wide border-1 border-teal-300 bg-gray-100 rounded-lg shadow-md"
  >
    <div>
      <router-link :to="{ name: 'story-details', params: { id: story.id }}">
        <h1
          class="font-normal text-gray-800 tracking-wide"
        >{{ story.name }} &bull; {{ story.username }} &bull; {{ story.date }}</h1>
      </router-link>
    </div>
    <div v-if="isLoggedIn" class="flex items-center">
      <i
        @click="addToFavourites(story.id)"
        v-if="story.favourite == false"
        class="far text-red-600 fa-heart mr-4 cursor-pointer"
      ></i>
      <i
        @click="removeFromFavourites(story.id)"
        v-if="story.favourite"
        class="fas text-red-500 fa-heart mr-4 cursor-pointer"
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