<template>
  <div class="container mx-auto my-6">
    <div class="relative">
      <div class="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
        <h1 class="text-5xl text-gray-800 font-semibold tracking-wide">Our Stories <small class="font-normal text-2xl">({{ searchStories.length }})</small></h1>

        <search @setSearch="getSearch"></search>
      </div>
      <alert
        v-if="alert"
        :message=" alert ? 'Story created successfully!' : 'Story' "
        class="transition-350"
        id="alert"
      ></alert>
      <div v-if="searchStories.length == 0">
          <hr class="w-1/3 mx-auto mt-6">
          <h1 class="text-2xl font-light tracking-wide text-center mt-2">There are no stories!</h1>
        </div>
      <stories class="mt-6" :stories="searchStories"></stories>
    </div>
  </div>
</template>

<script>
import Stories from "./Stories.vue";
import Alert from "../Alert.vue";
import { mapGetters } from "vuex";
import SearchFilter from "../SearchFilter.vue";

export default {
  data() {
    return {
      alert: "",
      search: ""
    };
  },
  computed: {
    ...mapGetters(["stories"]),
    searchStories() {
      if (this.search == "") {
        return this.stories;
      } else {
        const sortedStories = this.stories.filter(story =>
          story.name.toLowerCase().startsWith(this.search.toLowerCase())
        );

        return sortedStories;
      }
    }
  },
  components: {
    stories: Stories,
    alert: Alert,
    search: SearchFilter
  },
  created() {
    if (this.$route.query.story_created) {
      this.alert = this.$route.query.story_created;

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