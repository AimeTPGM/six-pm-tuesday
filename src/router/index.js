import Vue from 'vue'
import Router from 'vue-router'
import Social from '@/components/Social'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
