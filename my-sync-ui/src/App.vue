<template>
  <div id="app">
    <youtube-sync-page></youtube-sync-page>
  </div>
</template>

<script>
import YoutubeSyncPage from './views/YoutubeSyncPage.vue'

export default {
  name: 'App',
  components: {
    YoutubeSyncPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
