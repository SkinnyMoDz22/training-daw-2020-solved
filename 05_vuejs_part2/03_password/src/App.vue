<template>
  <div id="app">
    <MyPassword
      minLength="4"
      maxLength="8"
      containsNumbers="true"
      containsSpecialChars="true">
    </MyPassword>
  </div>
</template>

<script>
import MyPassword from './components/MyPassword.vue'

export default {
  name: 'App',
  components: {
    MyPassword
  },
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
