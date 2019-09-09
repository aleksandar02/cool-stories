<template>
  <tr
    class="text-teal-800 hover:bg-blue-100 transition-350"
    style="border-bottom: 1px solid #81e6d9;"
  >
    <router-link
      tag="td"
      :to="{ name: 'story-details', params: { id: story.id } }"
      class="p-3 border-teal-300"
    >
      <span style="cursor: pointer;">{{ story.name }}</span>
    </router-link>
    <td class="p-3 border-teal-300 max-w-md">{{ story.storyText.substring(0, 50) + '...' }}</td>
    <td class="p-3 border-teal-300">{{ story.date }}</td>
    <td class="p-3 border-teal-300 text-center">
      <i v-if="story.favourite" class="fa fa-check text-2xl text-green-400"></i>
      <i v-if="story.favourite == false" class="fa fa-times text-2xl text-red-400"></i>
    </td>
    <td class="p-3 border-teal-300 text-center flex justify-around">
      <router-link
        :to="{ name: 'story-details', params: { id: story.id } }"
        class="hover:bg-gray-100 py-2 px-4 rounded-lg hover:shadow-md transition-350"
        tag="a"
      >Details</router-link>
      <router-link
        :to="{ name: 'edit-story', params: { id: story.id } }"
        class="focus:outline-none hover:bg-teal-200 py-2 px-4 rounded-lg hover:shadow-md transition-350"
      >Edit</router-link>
      <button
        type="button"
        class="focus:outline-none hover:bg-red-300 py-2 px-4 rounded-lg hover:shadow-md transition-350"
        @click="deleteStory(story.id)"
      >Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["story"],
  methods: {
    deleteStory(story_id) {
      this.$store.dispatch("deleteStory", story_id);
    }
  }
};
</script>

<style>
</style>