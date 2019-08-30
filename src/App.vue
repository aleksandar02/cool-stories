<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    'appHeader': Header,
  },
  created() {
    this.$store.dispatch('initStories');
  }
}
</script>

<style>
  
</style>
