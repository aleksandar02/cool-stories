<template>
  <div class="w-full border-b-4 border-blue-400 shadow-md py-5">
    <div class="container mx-auto flex justify-between items-center">
      <div class="">
        <h1 class="font-bold text-xl"><span class="text-blue-600">Cool</span> &bull; <span>Stories</span></h1>
      </div>
      <ul class="list-none flex">
        <router-link to="/" exact active-class="text-blue-600" class="mr-12 font-semibold tracking-wider hover:text-blue-600" tag="li"><a>Home</a></router-link>
        <router-link to="/story" active-class="text-blue-600" class="mr-12 font-semibold tracking-wider hover:text-blue-600" tag="li"><a>Stories</a></router-link>
        <router-link to="/addStory" active-class="text-blue-600" class="mr-12 font-semibold tracking-wider hover:text-blue-600" tag="li"><a>Add Story</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


</style>