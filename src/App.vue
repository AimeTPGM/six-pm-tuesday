<template>
  <div id="app">
    <input type="text" />
    <div class="social-media-wrapper">
      <Social/>
    </div>
  </div>
</template>

<script>
import Social from './components/Social'

export default {
  name: 'app',
  components: {
    Social
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  .social-media-wrapper
    margin-top: 20px;
</style>
