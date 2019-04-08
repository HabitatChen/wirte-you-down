<template>
  <div class="wrapper">
    <h2>作品集</h2>
    <Swiper :lists="bannerList">
    </Swiper>
  </div>

</template>

<script>
  import Swiper from '@/components/ventor/swiper.vue'
  import appleAlike from '@/assets/pictures/resume/apple-style-slides.jpg'
  import canvas from '@/assets/pictures/resume/canvas.jpg'
  import navPage from '@/assets/pictures/resume/nav-page.jpg'

  export default {
    name: "HomeProject",
    data: function() {
      return {
        bannerList: null
      }
    },
    components: {
      Swiper
    },
    created() {
      this.bannerList = [{
        id:'0001',
        image:appleAlike
      },{
        id:'0002',
        image:canvas
      },{
        id:'0003',
        image:navPage
      }]
    },
    computed: {
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper {
    width:100%
    height:740px;
    width 940px
    margin 75px auto
    .swiper-img {
      width: 100%;
    }
  }
  .wrapper h2
  {
    text-align: center;
    color: #3d4451;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom 40px
  }

  .swiper-container {
      width: 940px;
      height: 640px;
  }
</style>
