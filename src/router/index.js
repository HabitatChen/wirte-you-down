import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Note from '@/components/Note'
import Script from '@/components/Notes/Script'
import Http from '@/components/Notes/Http'

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
        }
      ]
    }
  ]
})
