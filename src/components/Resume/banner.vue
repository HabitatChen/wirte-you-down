<template>
  <div class="banner">
    <div class="mask">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner'
  }
</script>

<style lang="stylus" scoped>
  .banner{
    height: 515px;
    background-image: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-694540.jpg);
    background-position: center center;
    background-size: cover;
  }
  .banner > .mask{
    height: 100%;
    width 100%
    background-color: rgba(0, 0, 0, 0.2)
  }
</style>
