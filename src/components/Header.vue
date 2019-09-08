<template>
  <div class="w-full border-b-4 border-blue-400 shadow-md py-5 mb-8">
    <div class="container mx-auto flex justify-between items-center">
      <div class>
        <router-link to="/" tag="h1" class="font-semibold cursor-pointer text-xl">
          <span class="text-blue-600">Cool</span> &bull;
          <span>Stories</span>
        </router-link>
      </div>
      <ul class="list-none flex">
        <router-link
          to="/"
          exact
          active-class="text-blue-600"
          class="text-lg cursor-pointer mr-12 hover:text-white tracking-wider transition-350 px-2 py-1 hover:text-blue-600"
          tag="li"
        >
          <a>Home</a>
        </router-link>
        <router-link
          to="/story"
          active-class="text-blue-600"
          class="text-lg cursor-pointer mr-10 hover:text-white tracking-wider transition-350 px-2 py-1 hover:text-blue-600"
          tag="li"
        >
          <a>Stories</a>
        </router-link>

        <router-link
          v-if="!isLoggedIn"
          to="/signin"
          active-class="text-blue-600"
          class="text-lg cursor-pointer hover:text-white tracking-wider transition-350 px-2 py-1 hover:text-blue-600"
          tag="li"
        >
          <a>Sign In</a>
        </router-link>

        <div class="z-10" v-if="isLoggedIn">
          <button
            @click="toggleDropdown"
            class="text-lg cursor-pointer hover:text-white tracking-wider transition-350 px-2 py-1 hover:text-blue-600 outline-none border-none focus:outline-none"
          >
            {{ user.username }}
            <i class="fas fa-caret-down"></i>
          </button>
          <div
            :class="{ hidden: dropdown}"
            class="shadow-md bg-white text-gray-800 rounded-lg absolute py-1 px-2 mt-2"
          >
            <ul class="w-40">
              <router-link
                to="/my-stories"
                active-class="text-blue-600"
                class="text-lg mb-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
                tag="li"
              >
                <a>My stories</a>
              </router-link>
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
              <hr />
              <li
                @click="logout"
                class="text-lg mb-1 mt-1 cursor-pointer hover:bg-blue-500 hover:text-white transition-350 px-2 py-1 hover:shadow-md"
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
  created() {},
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push('/');
    }
  },
  watch: {
    $route(to, from) {
      this.dropdown = true;
    }
  }
};
</script>

<style scoped>
</style>