<template>
  <div class="container mx-auto my-6">
    <div class="relative">
      <div class="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
        <h1 class="text-5xl text-gray-800 font-semibold tracking-wide">
          My Stories
          <small class="font-normal text-2xl">({{ searchStories.length }})</small>
        </h1>

        <search @setSearch="getSearch"></search>
      </div>

      <div class="flex justify-end">
        <router-link tag="a" class="bg-green-400 mb-3 text-lg text-white font-semibold rounded-lg tracking-wide py-2 px-4 hover:bg-blue-500 transition-350" to="/add-story">New <i class="fas fa-plus"></i></router-link>
      </div>

      <table class="w-full text-gray-800 ">
        <tr class="bg-blue-500 text-white text-left w-full overflow-x-scroll">
          <th class="p-3 w-1/12">Name</th>
          <th class="p-3 w-3/12">Story</th>
          <th class="p-3 w-1/12">Date</th>
          <th class="p-3 w-1/12 text-center">Favourite</th>
          <th class="p-3 w-3/12 text-center">Actions </th>
        </tr>
        <my-story v-for="story in searchStories" :key="story.id" :story="story"></my-story>
      </table>
      <div v-if="searchStories.length == 0">
          <hr class="w-1/3 mx-auto mt-6">
          <h1 class="text-2xl font-light tracking-wide text-center mt-2">There are no stories!</h1>
        </div>
    </div>
  </div>
</template>

<script>
import SearchFilter from "../SearchFilter.vue";
import MyStory from "./MyStory.vue";

export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    search: SearchFilter,
    myStory: MyStory
  },
  computed: {
    myStories() {
      return this.$store.getters.myStories;
    },
    searchStories() {
      if (this.search == "") {
        return this.myStories;
      } else {
        const sortedStories = this.myStories.filter(story =>
          story.name.toLowerCase().startsWith(this.search.toLowerCase())
        );

        return sortedStories;
      }
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