<template>
  <div class="home">
    <img data-cy="logo" class="mx-auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome Stalker"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
