<template>
  <div id="login">
      <header class="header">
        <van-nav-bar
          title="登 录"
          left-arrow
          @click-left="onClickLeft"
        />
      </header>
      
  </div>
</template>

<script >
import { Toast } from 'vant';

export default {
  name: 'LoginIndex',
  methods: {
    onClickLeft() {
      Toast('back');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>