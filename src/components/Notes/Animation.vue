<template>
  <div class="wrap">
    <h3>单元素/组件的过渡</h3>
    <div class="demo">
      <div id="demo">
        <button v-on:click="show = !show">
          Toggle
        </button>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
    <div class="demo">
      <h3>#css过渡</h3>
      <div class="css-transition-demo">
        <button @click="change = !change">
          Change
        </button>
        <transition name="slide-fade">
          <p v-if="change">
            点我会变哦
          </p>
        </transition>
      </div>
    </div>
    <div class="demo">
      <h3>#css动画</h3>
      <div class="css-animation-demo">
        <button @click="animation = !animation">
          Animation
        </button>
        <transition name="bounce">
          <p v-if="animation">
            以前的歌，我会觉得是记录一个瞬间的自己，每次听的时候都可以还原那个创作它的时空里，像做一次奇妙的时空旅行。但这首歌不一样，像一份给未来的礼物，每一个当它响起的时刻都仿佛是全新的，也许这也是“唐”赋予它的“魔”力吧。对，做可以一直听下去的作品，才是我努力的方向！
          </p>
        </transition>
      </div>
    </div>
    <div id="demo">
      <button @click="show = !show">
        Toggle
      </button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <p v-if="show">
          Demo
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "animation.vue",
    data() {
      return {
        show: true,
        change: true,
        animation: true
      }
    }
  }
</script>

<style scoped>
  .demo {
    border: 1px solid #ddd;
    width: 400px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
