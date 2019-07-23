<template>
  <div id="app">
    <mynavmenu></mynavmenu>
    <router-view/>
  </div>
</template>

<script>

  import mynavmenu from './components/subcomponent/NavMenu.vue'
export default {
  name: 'App',
  components: {
    mynavmenu
  },
}
</script>

<style>
#app {
 margin: 0px;
  padding:0px;
}

</style>
