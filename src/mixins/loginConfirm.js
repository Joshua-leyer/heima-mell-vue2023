export default {
  /**
   * 在 Vue 2 中，混入（Mixins）是一种灵活的方式，可以让你在多个组件间共享相同的功能或逻辑。
   * 混入可以包含数据、计算属性、方法、生命周期钩子等，可以在任何组件中使用，从而实现代码的重用。
   * 
   * 
   * 这里可以提供 等同于一个vue组件中具有相同的对象，例如：data, methods, computed, 生命周期函数
   * 把这里的数据混入到某个vue 组件内，那么组件中就可以使用这些数据
   * ！！注意，
   *  1.此处 和 组件内，当提供了同名的 data 或 methods , 则组件内优先级更高
   *  2.如果编写了生命周期函数，则 mixins中的生命周期函数 和 页面的生命周期函数，会用数组管理
   *   都被执行
   */
  data() {
    return {
      title: '标题'
    }
  },
  methods: {
    sayHi() {
      log(`hello~~!`)
    },
    // 根据登录状态判断是否显示登录确认框
    loginConfirm() {
      // 有 token 就是登录了
      if(this.$store.getters.token) {
        return false 
      } else {
        this.$dialog.confirm({
            title: '提示',
            message: '请先登录',
            confirmButtonText: '去登陆',
            cancelButtonText: '在逛逛'
          })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
            // on cancel
          }); 
        return true
      }
    }
  }
}