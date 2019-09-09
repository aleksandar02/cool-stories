<template>
  <div class="container mx-auto my-6 py-6 px-16 rounded-lg shadow-lg">
    <form action @submit.prevent="onSubmit">
      <h1
        class="text-5xl text-center text-gray-800 font-semibold mb-8 tracking-wide"
      >Add your own story</h1>
      <label for class="text-xl tracking-wide font-light">Name</label>
      <br />
      <input
        type="text"
        v-model="name"
        class="border-gray-400 border-2 rounded-full py-2 px-4 outline-none w-1/3 focus:border-blue-400 font-normal transition-450 tracking-wide text-gray-700 text-xl focus:shadow-md"
      />
      <br />
      <br />
      <label for class="text-xl tracking-wide font-light">Your story</label>
      <br />
      <textarea
        name
        id
        v-model="text"
        class="border-gray-400 border-2 rounded-lg py-2 px-4 outline-none w-2/3 resize-none font-normal focus:border-blue-400 transition-450 h-40 tracking-wide text-gray-700 text-xl focus:shadow-md"
      ></textarea>
      <button
        type="submit"
        class="border-1 block mt-4 mb-3 border-blue-600 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-450 py-2 px-4 text-xl font-light tracking-wider"
      >Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      text: ""
    };
  },
  methods: {
    onSubmit() {
      const user = this.$store.getters.getUser;

      const story = {
        id: Math.floor(Math.random() * (100 - 4 + 1)) + 4,
        username: user.username,
        date: "29-8-2018",
        name: this.name,
        storyText: this.text,
        favourite: false
      };

      this.$store.dispatch("createStory", story);
      this.$router.push({
        name: "story",
        query: { story_created: "true" }
      });
    }
  }
};
</script>

<style>
</style>