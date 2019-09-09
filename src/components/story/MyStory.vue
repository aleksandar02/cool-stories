<template>
  <tr class="text-teal-800">
    <td class="p-3 border-teal-300" style="border-bottom: 1px solid #81e6d9;">{{ story.name }}</td>
    <td class="p-3 border-teal-300 max-w-md" style="border-bottom: 1px solid #81e6d9;">{{ story.storyText.substring(0, 50) + '...' }}</td>
    <td class="p-3 border-teal-300" style="border-bottom: 1px solid #81e6d9;">{{ story.date }}</td>
    <td class="p-3 border-teal-300 text-center" style="border-bottom: 1px solid #81e6d9;">
      <i v-if="story.favourite" class="fa fa-check text-xl text-green-400"></i>
      <i v-if="story.favourite == false" class="fa fa-times text-xl text-red-400"></i>
    </td>
    <td class="p-3 border-teal-300 text-center flex justify-around" style="border-bottom: 1px solid #81e6d9;">
      <button class="focus:outline-none hover:bg-gray-100 py-2 px-4 rounded-lg hover:shadow-md transition-350">Details</button>
      <button class="focus:outline-none hover:bg-teal-200 py-2 px-4 rounded-lg hover:shadow-md transition-350">Edit</button>
      <button class="focus:outline-none hover:bg-red-300 py-2 px-4 rounded-lg hover:shadow-md transition-350">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["story"]
};
</script>

<style>
</style>