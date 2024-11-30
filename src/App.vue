<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <!-- <div class="box"></div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.box {
  width: 300px;
  height: 300px;
  background-color: pink;
}

</style>
