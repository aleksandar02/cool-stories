<template>
  <div
    class="my-4 flex justify-between p-6 text-gray-800 text-xl font-normal tracking-wide border-1 border-teal-300 bg-gray-100 rounded-lg shadow-md"
  >
    <div>
      <router-link :to="{ name: 'story-details', params: { id: story.id }}">
        <h1>{{ story.name }} &bull; {{ story.username }} &bull; {{ story.date }}</h1>
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["story"],
  methods: {}
};
</script>

<style>
</style>