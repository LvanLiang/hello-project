import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
//引入vuex
import vuex from 'vuex'
import store from './store'

//引入异步通信axios
import axios from 'axios'
Vue.prototype.axios = axios;

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

//利用路由钩子 beforeEach 来判断用户是否登录, 在跳转前执行
router.beforeEach((to, from, next)=>{
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');

  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/login'});
  }

  // 如果请求的是登录页，跳转到首页
  else if (to.path == '/login') {
    if (isLogin != null) {
      next({path: '/main'});
    }
  }

  // 如果为非登录状态，跳转到登录页
  else if (isLogin == null) {
    next({path: '/login'});
  }

  // 下一个路由
  next();

});


//关闭浏览器控制台关于环境的相关提示
Vue.config.productionTip = false;

// 安装路由
Vue.use(VueRouter);
// 安装 ElementUI
Vue.use(ElementUI);
//安装vuex
Vue.use(vuex);

new Vue({
  el: '#app', //查找 index.html 中 id 为 app 的元素
  router, //启用路由
  store,
  render: h => h(App) // 启用 ElementUI
});
