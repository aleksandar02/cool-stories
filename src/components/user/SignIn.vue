<template>
  <div class="max-w-xl container mx-auto my-6 px-16 py-10 rounded-lg shadow-lg z-10">
    <h1 class="text-center text-4xl text-gray-800 font-semibold mb-6 tracking-wide">Bitch, Sign In First!</h1>
    <form @submit.prevent="onSubmit">
      <label for class="text-2xl font-light tracking-wide">Username</label>
      <br />
      <input
        type="text"
        v-model="username"
        class="border-gray-400 border-2 rounded-full py-2 px-4 outline-none w-full focus:border-blue-400 transition-450 focus:shadow-md text-xl text-gray-700 tracking-wide"
      />
      <br />
      <br />
      <label for class="text-2xl font-light tracking-wide">Email</label>
      <br />
      <input
        type="text"
        v-model="email"
        class="border-gray-400 border-2 rounded-full py-2 px-4 outline-none w-full focus:border-blue-400 transition-450 focus:shadow-md text-xl text-gray-700 tracking-wide"
      />
      <br />
      <br />
      <button
        type="submit"
        class="rounded-full py-2 px-6 text-xl text-white bg-blue-400 block font-light text-2xl mt-4 w-full hover:bg-blue-500 transition-450 hover:shadow-md tracking-wide"
      >Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: ''
    };
  },
  methods: {
    onSubmit() {
      const user = {
        username: this.username,
        email: this.email
      };
      this.$store.dispatch('login', {username: user.username, email: user.email});
      this.$router.push('/add-story');
    }
  }
};
</script>

<style>
</style>