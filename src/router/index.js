import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: (resolve) => require(['@/components/Index.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          component: (resolve) => require(['@/components/index/home.vue'], resolve)
        }
      ]
    },
    {
      path: '/admin',
      component: (resolve) => require(['@/components/admin/index.vue'], resolve),
      children:[
        {
          path:'/',
          redirect: '/admin/articlePublish'
        },
        {
          //文章发布页
          path:'/admin/articlePublish',
          component: (resolve) => require(['@/components/admin/article/publish.vue'],resolve)
        },
        {
          //文章列表管理
          path:'/admin/articleList',
          component: (resolve) => require(['@/components/admin/article/list.vue'],resolve)
        }
      ]
    }
  ]
})
