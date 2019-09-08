<template>
  <div>
    <div class="container mx-auto my-6">
      <div class="relative">
        <div class="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
          <h1 class="text-5xl text-gray-800 font-semibold tracking-wide">Favourite stories <small class="font-normal text-2xl">({{ searchStories.length }})</small></h1>

          <search @setSearch="getSearch"></search>
        </div>
        <alert
          v-if="alert"
          :message=" alert ? 'Story added to favourites!' : 'Error' "
          class="transition-350"
          id="alert"
        ></alert>
        <div v-if="searchStories.length == 0">
          <hr class="w-1/3 mx-auto mt-6">
          <h1 class="text-2xl font-light tracking-wide text-center mt-2">There are no stories!</h1>
        </div>
        <favourite-story v-for="story in searchStories" :key="story.id" :story="story" class="mt-6"></favourite-story>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteStory from "./FavouriteStory.vue";
import Alert from "../Alert.vue";
import SearchFilter from "../SearchFilter.vue";

export default {
  data() {
    return {
      alert: "",
      search: ""
    };
  },
  components: {
    favouriteStory: FavouriteStory,
    alert: Alert,
    search: SearchFilter
  },
  computed: {
    favourites() {
      return this.$store.getters.favourites;
    },
    searchStories() {
      if (this.search == "") {
        return this.favourites;
      } else {
        const sortedStories = this.favourites.filter(story =>
          story.name.toLowerCase().startsWith(this.search.toLowerCase())
        );

        return sortedStories;
      }
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
  },
  methods: {
    getSearch(searchText) {
      this.search = searchText;
    }
  }
};
</script>

<style>
</style>