<template>
  <div class="wrap">
    <div class="todoapp">
      <section>
        <header>
          <h1>todos</h1>
          <input
            class="todo-input"
            @keyup.enter="addTodo"
            placeholder="Write down your todos"
            v-model="inputValue">
        </header>
        <section class="main">
          <input type="checkbox" id="selectAll">
          <label for="selectAll">全选</label>
          <ul class="todo-list">
            <li v-show="showTodo">{{inputValue}}</li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoMvcSelf.vue",
    data() {
      return {
        inputValue: '',
        showTodo: false
      }
    },
    methods: {
      addTodo() {
        this.showTodo = true
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .todo-input {
    width: 400px;
    height: 35px;
    border-radius: 5px;
    font-size: 18px;
    line-height: 35px;
  }
  .main {
    width: 400px;
    height: 300px;
    border: 1px solid pink;
    margin: 30px 0;
  }
</style>
