<template>
  <div>
    <h1 class="text-xl text-gray-600 leading-tight mb-5">Products</h1>
      <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/2">2</router-link>
      <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/7">7</router-link>
      <router-link class="bg-gray-600 text-white rounded-full no-underline px-4 py-2 mx-4" to="/products/4">4</router-link>
    <div class="m-5">
      <p>{{ id }}: 
    {{ person.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data: function() {
    return {
      person: null
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
      axios.get('https://swapi.co/api/people/'+this.id)
           .then(function (response) {
             that.person = response.data
           })
    }
  },
  mounted: function() {
    this.getData()
  }
}
</script>
