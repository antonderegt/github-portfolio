<template>
  <div id="app">
    <div id="nav">
      <router-link data-cy="router-link-home" to="/">Home</router-link> |
      <router-link data-cy="router-link-user" to="/user">User</router-link> | 
      <router-link data-cy="router-link-repos" to="/repos">Repos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/main.css' 

export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
