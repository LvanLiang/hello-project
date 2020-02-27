<template>
  <!--<div>个人信息:{{ $route.params.id }}</div>-->
  <div>个人信息=={{id}}</div>
</template>

<script>
    export default {
        props: ['id'],
        name: "UserProfile",

        //在进入路由前执行
        // to：路由将要跳转的路径信息
        // from：路径跳转前的路径信息
        // next：路由的控制参数
            // next() 跳入下一个页面
            // next('/path') 改变路由的跳转方向，使其跳到另一个路由
            // next(false) 返回原来的页面
            // next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例
        beforeRouteEnter: (to, from, next) => {
          console.log("准备进入个人信息页面");
          //注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，
          //此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例

          next(vm => {
            vm.getData();
          });
        },
        //在离开路由前执行
        beforeRouteLeave: (to, from, next) => {
          console.log("准备离开个人页面");
          next();
        },
        methods: {
          getData: function(){
            this.axios({
              method: 'get',
              url: 'http://www.baidu.com'
            }).then(function(result){
              console.log(result);
            }).catch(function(error){
              console.log(error);
            });
          }
        }
    }
</script>

<style scoped>

</style>
