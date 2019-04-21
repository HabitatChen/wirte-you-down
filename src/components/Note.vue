<template>
  <div class="layout-wrap">
    <div class="wrap">
      <header class="navBar">头部导航</header>
      <div class="layout">
        <aside class="sideBar">
          <ol class="sideBar-ol">
            <li class="sideBar-item"
                v-for="(item, index) in sideBarArray"
                @click="sideChange(item.name, index)"
                :class="{active: sideBarIndex === index}"
            >
              {{ item.title }}</li>
          </ol>
        </aside>
        <div class="mainAndFooter">
          <div class="content">
            <router-view></router-view>
          </div>
          <footer class="foot">底部</footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sideBarDir from './Notes/NoteDir.js'
  export default {
    name: 'Note',
    data() {
      return {
        sideBarArray: sideBarDir.sideBarDir,
        sideBarIndex: -1
      }
    },
    created() {
      console.log(1);
      let initialIndex = localStorage.getItem('sideBarIndex')
      this.sideBarIndex = !initialIndex ? 0 : initialIndex
      console.log('this is index');
      console.log(this.sideBarIndex);
    },
    mounted() {
      console.log(2);
      let liList = document.querySelectorAll('ol > li')
      console.log('this is list');
      console.log(liList);
      console.log('this is classList');
      console.log(liList[this.sideBarIndex].classList);
      liList[this.sideBarIndex].classList.add('active')
    },
    methods: {
      sideChange(name, index) {
        let liList = document.querySelectorAll('ol > li')
        liList[this.sideBarIndex].classList.remove('active')
        this.sideBarIndex = index
        localStorage.setItem('sideBarIndex', this.sideBarIndex)
        this.$router.push({name: name})
      }
    }
  }
</script>

<style>
  @import "../assets/css/common.css";
  .layout-wrap {
    display: flex;
    justify-content: center;
  }
  .navBar {
    width: 1400px;
    height: 200px;
    background: #00a0f8;
  }
  .layout {
    display: flex;
    width: 1400px;
  }
  .sideBar {
    width: 400px;
    height: 600px;
  }
  .sideBar-ol {
    padding: 0 30px 0 10px;
  }
  .sideBar-item {
    line-height: 30px;
    color: #03b401;
    border-bottom: 2px solid #ddd;
    padding: 0 10px;
  }
  .sideBar-item.active {
    color: red;
    border-bottom: 2px solid red;
  }
  .sideBar-item:hover {
    cursor:pointer;
  }
  .mainAndFooter {
    height: 600px;
    width: 1000px;
  }
  .content {
    min-height: 400px;
  }

</style>
