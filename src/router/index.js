import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      // {
      //   path: '/',
      //   name: 'Hello',
      //   component: Hello
      // },
      {
        path: '/',
        name: 'todos',
        component: Todos
      },
      { path: '/todo/:id',
        name: 'todo',
        component: Todo
      }
    ]
})
