<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-xs">
        <form data-cy="user-form" class="w-full max-w-sm" @submit="getData" @submit.prevent>
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input data-cy="user-form-input" v-model="username" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username" aria-label="Username">
            <router-link :to="/user/+username">
              <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">Lookup</button>
            </router-link>
          </div>
        </form>
      </div>
    <div data-cy="user-card" v-if="user" class="flex flex-col">
      <div class="flex m-5 p-5 rounded shadow-lg">
        <div class="flex-2">
          <img class="h-20 rounded-full m-5" :src="user.avatar_url" >
        </div>
        <div class="flex-1">
          <a :href="user.html_url" class="font-bold text-xl mb-2 text-blue-500" target="_blank">{{ user.name }}</a>
          <p>{{user.bio}}</p>
          <div class="px-6 py-4">
            <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{user.public_repos}}</span><span class="ml-1">Public Repos</span></span>
            <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{user.public_gists}}</span><span class="ml-1">Public Gists</span></span>
            <span class="m-2"><span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">{{user.followers}}</span><span class="ml-1">Followers</span></span>
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
  props: ['githubuser'],
  data: function() {
    return {
      username: this.githubuser,
      user: null,
    }
  },
  watch: {
    '$route' () {
      this.getData()
    },
    username () {
      // this.getData(); // Uncomment to enable hot searching (rate limit unauthenticated API 5000 calls / hour)
    }

  },
  methods: {
    async getData() {
      if(!this.username){
        return;
      }

      let res = await axios.get(`https://api.github.com/users/${this.username}`);
      this.user = res.data;
    }
  },
  mounted: function() {
    this.getData()
  }
}
</script>
