<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-card></home-card>
    <home-skill></home-skill>
    <home-project></home-project>
  </div>

</template>

<script>
  import HomeHeader from "@/components/Resume/header";
  import HomeBanner from "@/components/Resume/banner";
  import HomeCard from "@/components/Resume/card";
  import HomeSkill from "@/components/Resume/skill";
  import HomeProject from "@/components/Resume/project";
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeCard,
      HomeSkill,
      HomeProject
    },
    data () {
      return {
        swiperList:[]
      }
    }
  };
</script>

<style lang="stylus" scoped >
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }

  * {
    padding: 0;
    margin: 0;
  }

  hr {
    height: 0;
    border: none;
    border-top: 1px solid #dedede;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  body {
    background: #efefef;
    color: black;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
