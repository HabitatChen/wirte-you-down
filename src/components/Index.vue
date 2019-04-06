<template>
  <div class="wrap">
    <div class="topBar">
      <ul>
        <li class="topBarItem">
          <div class="topBar-home">
            home
          </div>
        </li>
        <li class="topBarItem">
          <div class="topBar-home">
            notes
          </div>
        </li>
        <li class="topBarItem">
          <div class="topBar-home">
            about
          </div>
        </li>
      </ul>
    </div>
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
  .wrap {
    height: 100vh;
    width: 100vw;
    background: url("https://cdn.dribbble.com/users/1751513/screenshots/3904002/load_times_800x600.png") no-repeat;
    background-size: 100% 100%;
  }
  .topBar {
    width: 70%;
    height: 100px;
    background: #f6f7be;
    position: fixed;
    margin: 0 auto;
  }
  .topBar > ul {
    display: flex;
  }
  .topBar .topBarItem {
    height: 30px;
    border: 1px solid red;
    font-size: 18px;
    line-height: 30px;
    background: #f6f7be;
  }
  .topBarItem > div {
    border-bottom: 3px solid transparent;
  }
  .topBarItem > div:hover {
    cursor: pointer;
    border-bottom: 3px solid red;
  }
  .topBar > ul > li {
    margin: 0 30px;
  }
</style>
