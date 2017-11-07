<template lang="jade">

div.login-wrapper
  div.login-button-wrapper
    button(v-on:click="login")
      | Login
</template>

<script>
/* global firebase */
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    login: function () {
      var provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // var token = result.credential.accessToken
        // var secret = result.credential.secret
        // var user = result.user
        console.log(result)
      }).catch(function (error) {
        // var errorCode = error.code
        // var errorMessage = error.message
        // var email = error.email
        // var credential = error.credential
        console.error(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.login-wrapper
  height: 100vh;
.login-button-wrapper
button
  padding: 10px;
  background: transparent;
  border: solid 1px #FFF;
  color: #FFF;
  font-size: 1.5em;
  min-width: 200px;
  border-radius: 5px;
  font-weight: 100;
button:hover
  border: 0;
  background: #FFF;
  color: #6B717E;


</style>
