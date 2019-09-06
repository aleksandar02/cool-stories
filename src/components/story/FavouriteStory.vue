<template>
  <div class=" border-blue-400 border-b-4 py-6 rounded-lg shadow-md px-4">
    <router-link :to="{ name: 'story-details', params: { id: story.id } }" tag="h1" class="text-xl tracking-wide font-normal cursor-pointer">{{ story.name }}</router-link>
  </div>
</template>

<script>
export default {
  props: ['story']
}
</script>

<style>

</style>