<template>
    <input
      type="text"
      @keyup="onChange"
      v-model="search"
      class="border-1 border-gray-300 shadow-md transition-350 focus:shadow-lg outline-none rounded-full w-1/4 py-2 px-6 text-lg text-gray-600"
      placeholder="Search for stories..."
    />
</template>

<script>
export default {
  data() {
    return {
      search: ''
    };
  },
  methods: {
    onChange(event) {
      this.$emit('setSearch', this.search);
    }
  }
};
</script>

<style>
</style>