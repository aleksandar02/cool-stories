<template>
  <div class="w-full border-b-4 border-blue-400 shadow-md py-5 mb-8">
    <div class="container mx-auto flex justify-between items-center">
      <div class>
        <h1 class="font-bold text-xl">
          <span class="text-blue-600">Cool</span> &bull;
          <span>Stories</span>
        </h1>
      </div>
      <ul class="list-none flex">
        <router-link
          to="/"
          exact
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Home</a>
        </router-link>
        <router-link
          to="/story"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Stories</a>
        </router-link>
        <router-link
          to="/favourite-stories"
          v-if="isLoggedIn"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Favourites</a>
        </router-link>
        <router-link
          v-if="isLoggedIn"
          :to="{ name: 'add-story'}"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Add Story</a>
        </router-link>
        <router-link
          v-if="isLoggedIn == false"
          to="/signin"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Sign In</a>
        </router-link>
        <!-- <router-link
          v-if="isLoggedIn == false"
          to="/signup"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Sign Up</a>
        </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style scoped>
</style>