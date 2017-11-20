import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/page/login.vue')),'login');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    }
  ]
})
