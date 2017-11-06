import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/pages/Admin'
import Index from '@/components/pages/Index'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }]
})
