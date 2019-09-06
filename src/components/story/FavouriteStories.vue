<template>
  <div>
    <div class="container mx-auto my-6">
      <div class="relative">
        <div class="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
          <h1 class="text-5xl text-gray-800 font-semibold tracking-wide">Favourite stories</h1>

          <input
            type="text"
            class="border-1 border-gray-300 shadow-md transition-350 focus:shadow-lg outline-none rounded-full w-1/4 py-2 px-6 text-lg text-gray-600"
            placeholder="Search for stories..."
          />
        </div>
        <alert
          v-if="alert"
          :message=" alert ? 'Story added to favourites!' : 'Error' "
          class="transition-350"
          id="alert"
        ></alert>
        <favourite-story v-for="story in favourites" :key="story.id" :story="story" class="mt-6"></favourite-story>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteStory from "./FavouriteStory.vue";
import Alert from "../Alert.vue";

export default {
  data() {
    return {
      alert: ""
    };
  },
  components: {
    favouriteStory: FavouriteStory,
    alert: Alert
  },
  computed: {
    favourites() {
      return this.$store.getters.favourites;
    }
  },
  created() {
    if (this.$route.query.added_to_favourites) {
      this.alert = this.$route.query.added_to_favourites;

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