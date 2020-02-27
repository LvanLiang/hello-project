import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'


//用户嵌套的路由
import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'


//404页面
import NotFound from '../views/error/NotFound'

//安装路由
Vue.use(Router);

export default new Router({
  // 路由模式有两种：
  // 1.hash：路径带 # 符号，如 http://localhost/#/login 
  // 2.history：路径不带 # 符号，如 http://localhost/login
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {path: '/user/profile/:id',name: 'UserProfile', component: UserProfile, props: true},
        {path: '/user/list', name: 'UserList', component: UserList}
      ]
    },{
      //带参数的组件重定向
      path: '/goMain/:username',
      redirect: '/main/:username'
    },{
      path: '*',
      component: NotFound 
    }
  ]
});
