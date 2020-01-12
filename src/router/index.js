 const routers = [
    {
      path: '/',
      component: (resolve) => require(['@/components/Index.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home/index'
        },
        {
          path: '/home/:code',
          component: (resolve) => require(['@/components/index/home.vue'], resolve)
        },
        {
            path: '/article/:id',
            component: (resolve) => require(['@/components/index/article.vue'], resolve)
        },
          {
              path: '/about',
              component: (resolve) => require(['@/components/index/about.vue'], resolve)
          }
      ]
    },
   {
       path:'/admin/login',
       component: (resolve) => require(['@/components/admin/login.vue'],resolve)
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