<template>
  <div>
    <div>
      <span>{{user.name}} </span>
      <span>{{user.surname}} </span>
      <span>{{user.years}} </span>
      <span>{{user.score}}</span>
      <div><button @click="onModify">modify</button></div>
      <div><button @click="onDelete">delete</button></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    onModify() {
      console.log(`on modify of button ${this.user.id} called`)
      this.$emit('modify')
    },
    onDelete() {
      this.$emit('delete', this.user.id)
    }
  }
}
</script>

<style>

</style>