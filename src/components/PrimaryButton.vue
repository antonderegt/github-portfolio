<template>
  <div>
    <h2>{{ value }}</h2>
    <h1>{{ count }}</h1>
    <button class="bg-purple-600 text-green-600" @click="count++">Add</button>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data: () => {
    return {
      count: 0
    };
  }
}
</script>

<style scoped>
</style>
