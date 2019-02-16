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
            v-model="newTodo">
        </header>
        <section class="main" v-show="todos.length">
          <input type="checkbox" id="selectAll">
          <label for="selectAll">全选</label>
          <ul class="todo-list">
            <li v-for="(todo, index) in todos" class="todo-list-item">
              <div class="view">
                <input type="checkbox" v-model="todo.completed">
                <label @dblclick="editTodo(todo)">
                  {{todo.title}}
                </label>
                <button class="cancel" @click="deleteTodo(todo)">X</button>
              </div>
              <input type="text"
                     v-show="todo === edtingTodo"
                     class="edit-input"
                     v-focus="todo === edtingTodo"
                     v-model="todo.title"
                     @keyup.enter="doneEdit(todo)"
                     @blur="doneEdit(todo)"
                     @keyup.esc="cancelEdit(todo)"
              >
            </li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<script>

  let STORAGE_KEY = 'todos-vuejs-2.0'
  let todoStorage = {
    fetch: function () {
      let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      todos.forEach(function (todo, index) {
        todo.id = index
      })
      todoStorage.uid = todos.length
      return todos
    },
    save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
  }

  export default {
    name: "TodoMvcSelf.vue",
    data() {
      return {
        newTodo: '',
        showTodo: false,
        edtingTodo: null,
        editing: false,
        todos: todoStorage.fetch()
      }
    },
    methods: {
      addTodo() {
        // 把页面中的 input 的输入内容赋值给this.newTodo,并去掉前后空格
        let value = this.newTodo && this.newTodo.trim()
        if (!value) {
          return
        }
        // 然后给todos这一个数组添加刚才输入的内容
        this.todos.push({
          id: todoStorage.uid++,
          title: value,
          completed: false
        })
        this.newTodo = ''
      },
      editTodo(todo) {
        this.beforeEditCache = todo.title
        this.edtingTodo = todo
      },
      doneEdit(todo) {
        if (!this.edtingTodo) {
          return
        }
        this.edtingTodo = null
        todo.title = todo.title.trim()
        if (!todo.title) {
          return
        }
      },
      cancelEdit(todo) {
        todo.title = this.beforeEditCache
        this.edtingTodo = null
      },
      deleteTodo(index) {
        // this.todos.splice(this.todos.indexOf(todo), 1)
        this.todos.splice(index, 1)
      }
    },
    created() {

    },
    watch: {
      // watch 的 API 不熟悉
      todos: {
        handler: function (todos) {
          todoStorage.save(todos)
        },
        deep: true
      }
    },
    directives: {
      // derectives 这一块内容不熟悉
      'focus': function (el, binding) {
        if (binding.value) {
          // 如果绑定的值是个真的 binding.value === (v-focus)='1 + 1' 中的1+1
          // 然后聚焦
          el.focus()
        }
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
  .todo-list-item {
    position: relative;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
  .cancel {
    position: absolute;
    top: 5px;
    right: 20px;
  }
  .edit-input {
    position: absolute;
    top: 0;
    left: 21px;
  }
</style>
