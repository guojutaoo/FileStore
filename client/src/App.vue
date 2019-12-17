<template>
  <div id="app">
    <NavBar />
    <SearchBar />
    <router-link to='/read'>read pdf</router-link>
    <!-- <p1>Search Result</p1> -->
    <router-view />
    <!-- <List /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
// import List from './components/List.vue'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'



Vue.use(BootstrapVue)



export default {
  name: 'app',
  components: {
    // HelloWorld,
    NavBar,
    SearchBar,
    // List,
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
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
}
</style>
