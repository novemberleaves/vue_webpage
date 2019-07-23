import Vue from 'vue'
import Router from 'vue-router'
import Modreat from '@/components/Modreat'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '@/components/ThirdPage'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Modreat',
      component: Modreat
    },
    {
      path: '/酒店智能管理系统',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/自助入住设备',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/购买方案',
      name: 'ThirdPage',
      component: ThirdPage
    }
  ]
})
