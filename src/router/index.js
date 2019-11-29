 const routers = [
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
          redirect: '/admin/articleList'
        },
        {
          //文章发布页
          path:'/admin/articlePublish/:id',
          component: (resolve) => require(['@/components/admin/article/publish.vue'],resolve)
        },
        {
          //文章列表管理
          path:'/admin/articleList',
          component: (resolve) => require(['@/components/admin/article/list.vue'],resolve)
        },
        {
            //分类管理
            path:'/admin/categoryList',
            component: (resolve) => require(['@/components/admin/category/list.vue'],resolve)
        }
      ]
    }
  ];
export default routers;