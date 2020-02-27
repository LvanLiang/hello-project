<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//监听页面是否刷新，如果页面刷新了，将 state 对象存入到 sessionStorage 中。
//页面打开之后，判断 sessionStorage 中是否存在 state 对象，如果存在，则说明页面是被刷新过的，
//将 sessionStorage 中存的数据取出来给 vuex 中的 state 赋值。如果不存在，说明是第一次打开，则取 vuex 中定义的 state 初始值
  export default {
    name: 'App',
    mounted() {
      //页面刷新的时候调用saveState保存用户信息
      window.addEventListener('unload', this.saveState);
    },
    methods: {
      saveState() {
        sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>
