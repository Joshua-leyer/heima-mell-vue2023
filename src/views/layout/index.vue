<template>
  <div>
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script >
export default {
  name: 'LayoutIndex'
}
</script>

<style lang="scss" scoped>

</style>