<template>
  <div>
    <input type="password" />
    <button @click="print">Print</button>
  </div>
</template>

<script>
export default {
  props: {
    minLength: Number,
    maxLength: Number,
    containsNumbers: Boolean,
    containsSpecialChars: Boolean
  },
  methods: {
    print() {
      console.log(`${this.minLength} -
                    ${this.maxLength} -
                    ${this.containsNumbers} -
                    ${this.containsSpecialChars}`)
    },
    validate() {
      
    }
  }

}
</script>

<style>

</style>