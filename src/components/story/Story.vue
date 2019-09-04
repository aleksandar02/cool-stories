<template>
  <div class="container mx-auto my-6">
    <div class="relative">
      <div class="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
        <h1 class="text-5xl text-gray-800 font-semibold tracking-wide">Our Stories</h1>

        <input type="text" class="border-1 border-gray-300 shadow-md transition-350 focus:shadow-lg outline-none rounded-full w-1/4 py-2 px-6 text-lg text-gray-600" placeholder="Search for stories...">
      </div>
      <alert v-if="alert" class="transition-350" id="alert" ></alert>
      <stories class="mt-6"></stories>
    </div>
  </div>
</template>

<script>
import Stories from "./Stories.vue";
import Alert from "../Alert.vue";

export default {
  data() {
    return {
      alert: ""
    };
  },
  components: {
    stories: Stories,
    alert: Alert
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
  }
};
</script>

<style>
</style>