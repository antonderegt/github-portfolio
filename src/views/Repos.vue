<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-xs">
        <form class="w-full max-w-sm" @submit="getData" @submit.prevent>
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input v-model="username" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username" aria-label="Username">
            <router-link :to="/repos/+username">
              <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">Lookup</button>
            </router-link>
          </div>
        </form>
      </div>
      <div v-if="repos && repos.length" class="flex flex-col" id="repos">
        <div v-for="repo in repos" :key="repo.node_id" class="flex m-5 p-5 rounded shadow-lg">
          <div class="flex-2">
            <img class="h-20 rounded-full m-5" :src="repo.owner.avatar_url" >
          </div>
          <div class="flex-1">
            <p>{{username}}</p>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['user'],
  data: function() {
    return {
      repos: null,
      username: this.user
    }
  },
  watch: {
    '$route' () {
      this.getData()
    }
  },
  methods: {
    async getData() {
      if(!this.username){
        return;
      }

      let res = await axios.get(`https://api.github.com/users/${this.username}/repos`);
      this.repos = res.data;
    }
  },
  mounted: function() {
    this.getData()
  }
}
</script>
