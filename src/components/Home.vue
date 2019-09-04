<template>
  <div class="container mx-auto my-6 p-16 rounded-lg shadow-lg z-10">
    <div class="w-full flex flex-wrap w-full">
      <div class="max-w-xl">
        <h1 class="text-5xl leading-none my-4 font-bold text-gray-800">
          It's time to create your
          <br />super awesome story
        </h1>
        <p
          class="mt-6 text-lg text-gray-500"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the is simply dummy text of the printing and typesetting industry.</p>
        <br />
        <br />
        <router-link
          to="/addStory"
          tag="a"
          class="rounded-full text-white bg-blue-400 uppercase font-bold tracking-wide py-4 text-sm px-6 hover:bg-blue-500 transition-450"
        >Get Started Now</router-link>
      </div>
      <div class="max-w-lg lg:mx-auto flex-grow mt-16">
        <ul class>
          <li
            class="rounded-lg shadow-md py-2 text-lg px-4 text-white bg-green-400 mb-2"
          >Add your own stories</li>
          <li class="rounded-lg shadow-lg py-2 px-4 text-lg text-white bg-green-400 mb-2">Edit your stories</li>
          <li class="rounded-lg shadow-xl py-2 px-4 text-lg text-white bg-green-400">Delete them</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>



export default {};
</script>

<style>
  .transition-450 {
    transition: all 450ms ease;
  }
</style>