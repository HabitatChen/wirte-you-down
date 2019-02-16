<template>
  <div class="wrap">
    <header>
      <p>todos</p>
      <input type="text"
             placeholder="write down your todos"
             @keyup.enter="addTodo"
             v-model="newTodo"
      >
    </header>
    <main>
      <ul>
        <li v-for="(todo, index) in todos" class="todo-list">
          <div class="view">
            <input type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="cancelBtn" @click="removeTodo(index)">X</button>
          </div>
          <input type="text"
                 v-show="todo === editingTodo"
                 class="edit-input"
                 v-model="todo.title"
                 @keyup.enter="doneEdit(todo)"
                 @blur="doneEdit(todo)"
                 v-focus="todo === editingTodo"
          >
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  const STORAGE_KEY = 'todos'
  let todoStorage = {
    fetch: function () {
      let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      todos.forEach((todo, index) => {
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
    name: "Test.vue",
    data() {
      return {
        todos: todoStorage.fetch(),
        newTodo: '',
        editingTodo: null
      }
    },
    methods: {
      addTodo() {
        let value = this.newTodo && this.newTodo.trim()
        if (!value) {
          window.alert('请输入内容')
          this.newTodo = ''
          return
        }
        this.todos.push({
          id: todoStorage.uid++,
          title: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
      },
      editTodo(todo) {
        this.beforeEditCache = todo.title
        this.editingTodo = todo
      },
      doneEdit(todo) {
        if (!this.editingTodo) {
          return
        }
        this.editingTodo = null
        todo.title = todo.title.trim()
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
      }
    },
    watch: {
      todos: {
        handler: function (todos) {
          todoStorage.save(todos)
        },
        deep: true
      }
    },
    directives: {
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
  .todo-list {
    position: relative;
  }
  .edit-input {
    position: absolute;
    top: 0;
    left: 21px;
  }
</style>
