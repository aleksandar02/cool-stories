<template>
  <div class="container mx-auto my-6 py-6 px-16 rounded-lg shadow-lg">
    <form action @submit.prevent="onSubmit">
      <h1 class="text-5xl text-center text-gray-800 font-bold mb-8 tracking-wide">Add your own story</h1>
      <label for class="text-xl">Name</label>
      <br />
      <input
        type="text"
        v-model="name"
        class="border-gray-400 border-2 rounded-full py-2 px-4 outline-none w-1/3 focus:border-blue-400 transition-450 tracking-wide text-gray-700 text-xl focus:shadow-md"
      />
      <br />
      <br />
      <label for class="text-xl">Your story</label>
      <br />
      <textarea
        name
        id
        v-model="text"
        class="border-gray-400 border-2 rounded-lg py-2 px-4 outline-none w-2/3 resize-none focus:border-blue-400 transition-450 h-40 tracking-wide text-gray-700 text-xl focus:shadow-md"
      ></textarea>
      <button
        type="submit"
        class="rounded-full py-2 px-6 text-xl text-white bg-blue-400 block mt-4 hover:bg-blue-500 transition-450 tracking-wide mb-4"
      >Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      text: ''
    }
  },
  methods: {
    onSubmit() {
      const user = this.$store.getters.getUser;

      const story = {
        id: Math.floor(Math.random() * (100 - 4 + 1)) + 4,
        username: user.username,
        date: '29-8-2018',
        name: this.name,
        storyText: this.text
      }

      this.$store.dispatch('createStory', story);
      this.$router.push({
        name: 'story',
        query: { story_created: 'true' }
      });
    }
  }
};
</script>

<style>
</style>