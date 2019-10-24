<template>
  <div>
    <h1 class="text-xl text-gray-600 leading-tight mb-5">Repos</h1>
    <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/2">2</router-link>
    <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/7">7</router-link>
    <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/4">4</router-link>
    <div class="flex flex-col">
    <div v-for="repo in repos" :key="repo.node_id" class="flex m-5 p-5 rounded shadow-lg">
      <div class="flex-2">
        <img class="h-20 rounded-full m-5" :src="repo.owner.avatar_url" >
      </div>
      <div class="flex-1">
        <a :href="repo.html_url" class="font-bold text-xl mb-2 text-blue-500" target="_blank">{{ repo.full_name }}</a>
        <p>{{repo.description}}</p>
        <div class="px-6 py-4">
          <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{repo.open_issues}}</span><span class="ml-1">Issues</span></span>
          <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{repo.watchers}}</span><span class="ml-1">Watchers</span></span>
          <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{repo.forks}}</span><span class="ml-1">Forks</span></span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data: function() {
    return {
      repos: null
    }
  },
  watch: {
    '$route' () {
      this.getData()
    }
  },
  methods: {
    getData() {
      var that = this
      axios.get('https://api.github.com/users/antonderegt/repos', {
             headers: {
               Accept: 'application/vnd.github.v3+json'
             }
           })
           .then(function (response) {
             that.repos = response.data
           })
    }
  },
  mounted: function() {
    this.getData()
  }
}
</script>
