import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Note from '@/components/Note'
import Script from '@/components/Notes/Script'
import Http from '@/components/Notes/Http'
import TodoMvc from '@/components/Notes/TodoMvc.vue'
import TodoMvcSelf from '@/components/Notes/TodoMvcSelf.vue'
import Test from '@/components/Notes/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/notes',
      name: 'note',
      component: Note,
      children: [
        {
          name: 'script',
          path: 'script',
          component: Script
        },
        {
          name: 'http',
          path: 'http',
          component: Http
        },
        {
          name: 'todomvc',
          path: 'todo-mvc',
          component: TodoMvc
        },
        {
          name: 'todomvc-self',
          path: 'todo-mvc-self',
          component: TodoMvcSelf
        },
        {
          name: 'test',
          path: 'test',
          component: Test
        }
      ]
    }
  ]
})
