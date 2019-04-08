<template>
  <div class="wrap">
    <div class="topBar">
      <div class="logo">
        <img src="../assets/pictures/lufei.png" alt="">
      </div>
      <ul>
        <li class="topBarItem">
          <div class="topBar-home">
            HOME
          </div>
        </li>
        <li class="topBarItem" @click="pageChangeTo('note')">
          <div class="topBar-home">
            NOTES
          </div>
        </li>
        <li class="topBarItem" @click="pageChangeTo('resume')">
          <div class="topBar-home">
            RESUME
          </div>
        </li>
        <li class="topBarItem">
          <div class="topBar-home">
            PROJECTS
          </div>
        </li>
      </ul>
    </div>
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
    pageChangeTo(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/common.css";
  .wrap {
    height: 100vh;
    width: 100vw;
    background: url("https://cdn.dribbble.com/users/1751513/screenshots/3904002/load_times_800x600.png") no-repeat;
    background-size: 100% 100%;
  }
  .topBar {
    width: 100%;
    height: 140px;
    background: #f6f7be;
    position: fixed;
    margin: 0 auto;
    background: linear-gradient(#f6f7be, white);
    display:flex;
    justify-content: space-between;
  }
  .topBar > .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  .topBar > .logo > img {
    width: 100%;
    height: 100%;
  }
  .topBar > ul {
    display: flex;
    margin-top: 35px;
    margin-right: 100px;
  }
  .topBar .topBarItem {
    height: 30px;
    color: #1b897a;
    font-size: 18px;
    line-height: 30px;
    font-family: "微软雅黑", Arial, sans-serif;
  }
  .topBarItem > div {
    border-bottom: 3px solid transparent;
  }
  .topBarItem > div:hover {
    cursor: pointer;
    color: #dc5b47;
    border-bottom: 3px solid #00a0f8;
  }
  .topBar > ul > li {
    margin: 0 30px;
  }
  </style>
