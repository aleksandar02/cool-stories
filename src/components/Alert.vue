<template>
  <div        
        class="w-full border-1 border-blue-400 bg-blue-300 text-white p-6 rounded-lg shadow-md"
      >
          <h3 class="text-xl tracking-normal">
            {{ message }} &nbsp;
            <i class="fas fa-heart text-red-400 text-2xl"></i>
          </h3>
      </div>
</template>

<script>
export default {
  props: ["message"]
}
</script>

<style>

</style>