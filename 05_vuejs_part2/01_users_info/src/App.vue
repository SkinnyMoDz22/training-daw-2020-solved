<template>
  <div id="app">
    <UserInfo
      v-for="user in users"
      :key="user.id"
      :user="user"
      @modify="onUserModify"
      @delete="onUserDelete">
    </UserInfo>
  </div>
</template>

<script>

import UserInfo from './components/UserInfo'
import MyPassword from './components/MyPassword'

export default {
  name: 'App',
  components: {
    UserInfo,
    MyPassword
  },
  data() {
    return {
      msg: 'Some title',
      users: [
        { id: 0, name: 'Cloyd', surname: 'Oberbrunner', years: 34, score: 65 },
        { id: 1, name: 'Kevon', surname: 'Schaden', years: 24, score: 45 },
        { id: 2, name: 'Cassandra', surname: 'Fadel', years: 25, score: 92 },
        { id: 3, name: 'Brandi', surname: 'Koelpin', years: 37, score: 76 },
      ]
    }
  },
  methods: {
    onUserModify() {
      console.log('on user modify')
    },
    onUserDelete(id) {
      console.log('on user delete ' + id)
      // buscar el elemento con id = id
      // eliminarlo del users
    }
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
