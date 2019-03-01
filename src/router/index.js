import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Note from '@/components/Note'
import Script from '@/components/Notes/Script'
import Http from '@/components/Notes/Http'
import TodoMvc from '@/components/Notes/TodoMvcSelf.vue'
import Animation from '@/components/Notes/Animation.vue'
import DomEvent from '@/components/Notes/DomEvent.vue'
import Jsonp from '@/components/Notes/Jsonp.vue'

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
          name: 'animation',
          path: 'animation',
          component: Animation
        },
        {
          name: 'DomEvent',
          path: 'domevent',
          component: DomEvent
        },
        {
          name: 'JSONP',
          path: 'jsonp',
          component: Jsonp
        }
      ]
    }
  ]
})
