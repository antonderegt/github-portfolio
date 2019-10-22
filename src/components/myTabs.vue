<template>
  <div>
    <button @click="selectTab(row.id)" 
            v-for="row in content"
            :key="row.id"
            :class="{'bg-blue-400' : currentTab == row.id}" 
            class="p-4 font-bold">{{ row.title }}</button>

    <div v-for="row in content"
        :key="row.id">
      <div v-if="currentTab == row.id"
           class="bg-blue-100 p-8">
          <h2>{{ row.id }}</h2>
          <p>{{ row.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Array
  },
  data:function() {
    return {
      currentTab: 1,
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab
    }
  }
}
</script>

<style>

</style>
