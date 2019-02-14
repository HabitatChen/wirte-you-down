<template>
  <div class="wrap">
    <button @click="toStart">跳到起步页</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    toStart() {
      this.$router.push({name: 'note'})
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/common.css";
  .warp {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00a0f8;
  }
</style>
