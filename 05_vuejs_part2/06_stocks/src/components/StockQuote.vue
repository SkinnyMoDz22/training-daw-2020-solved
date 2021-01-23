<template>
  <div>
      <span>{{stock.name}} {{stock.value}}</span>
      <span :class="{positive: isPositive, negative: !isPositive}">{{stock.change}} {{stock.percentChange}}</span>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
      return {
          isPositive: false
      }
  },
  created() {
      if (this.stock.change >= 0) {
        this.isPositive = true
      }
  }
};
</script>

<style>
.positive {
    color: green;
}
.negative {
    color: darkred;
}
</style>