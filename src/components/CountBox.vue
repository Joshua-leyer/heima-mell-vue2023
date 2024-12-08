<template>
  <div class="count-box">
    <button @click="handleSub" class="minus"> - </button>
    <input type="text" class="inp" @change="handleChange" :value="value">
    <button @click="handleAdd" class="add"> + </button>

  </div>
</template>


<script>
/**
在 Vue 中，使用 v-model 语法时，默认的 prop 名称是 value。
如果你希望使用不同的 prop 名称而不是 value，可以通过自定义 v-model 的名称来实现。
<CountBox v-model:count="proCounts"></CountBox>
*/
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleSub() {
      if (this.value <= 1) return
      this.$emit('input', this.value -1)
    },
    handleAdd() {
      this.$emit('input', this.value +1)

    },
    handleChange(e) {
      let num = +e.target.value; // 转数字处理
      if (isNaN(num) || num < 1) { // 不合法
        e.target.value = this.value; 
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style  lang="less" scoped>
.count-box{
  width: 110px;
  display: flex;
  .minus, .add{
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}

</style>