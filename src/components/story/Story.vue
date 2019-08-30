<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-center text-5xl text-gray-800 font-bold">Our Stories</h1>
    <stories></stories>
  </div>
</template>

<script>
import Stories from './Stories.vue';

export default {
  components: {
    'stories': Stories
  }
};
</script>

<style>

</style>