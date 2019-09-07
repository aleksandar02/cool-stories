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
          v-if="!isLoggedIn"
          to="/signin"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Sign In</a>
        </router-link>

        <div class="z-10" v-if="isLoggedIn">
          <button
            @click="toggleDropdown"
            class="mr-12 font-semibold tracking-wider hover:text-blue-600 outline-none border-none focus:outline-none"
          >Hello, user</button>
          <div
            :class="{ hidden: dropdown}"
            class="shadow-md bg-white text-gray-800 rounded-lg absolute py-1 px-2"
          >
            <ul class="w-40">
              <router-link
                to="/add-story"
                active-class="text-blue-600"
                class="text-lg mb-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
                tag="li"
              >
                <a>Add story</a>
              </router-link>
              <router-link
                to="/favourite-stories"
                active-class="text-blue-600"
                class="text-lg mb-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
                tag="li"
              >
                <a>Favourites</a>
              </router-link>
              <li
                class="text-lg mb-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
              >
                <a>Liked</a>
              </li>
              <li
                class="text-lg mb-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
              >
                <a>Log out</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <router-link
          v-if="isLoggedIn == false"
          to="/signup"
          active-class="text-blue-600"
          class="mr-12 font-semibold tracking-wider hover:text-blue-600"
          tag="li"
        >
          <a>Sign Up</a>
        </router-link>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: true
    };
  },
  created() {
    window.addEventListener('click', function(e){
      // close dropdown when clicked outside
      if (!this.dropdown.contains(e.target)){
        this.dropdown = true
      } 
    })
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    }
  },
  watch:{
    $route (to, from){
        this.dropdown = true;
    }
} 
};
</script>

<style scoped>
</style>