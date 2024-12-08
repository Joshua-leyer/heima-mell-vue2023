<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)" />

    <van-search v-model="searchWord" show-action placeholder="请输入搜索关键词" clearable>
      <template #action>
        <div @click="handleSearch(searchWord)" >搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearHistory" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div v-for="item in history"  class="list-item" @click="handleSearch(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getHistoryList, setHistory, clearHistory} from '@/utils/storage.js';

export default {
  name: 'SearchIndex',
  data() {
    return {
      searchWord: '',
      // history: ['a', 'b', 'c']
      history: getHistoryList()
    }
  },
  methods: {
    handleSearch(searchWord) {
      // indexOf() 不存在返回 -1 , 用来判断 是否在历史记录中
      let index = this.history.indexOf(searchWord)
      if (index !== -1) { // 不在历史记录中
        // 把在历史中的 推入到最新的地方
        this.history.splice(index , 1)
      }
      this.history.unshift(searchWord);
      setHistory(this.history)
      // 跳转到搜索页
      this.$router.push(`/searchlist?search=${searchWord}`)
    },
    clearHistory() {
      log(`click`)
      // this.history.splice(0, this.history.length);
      clearHistory()
      this.history = []   // vue无法监听到 localStorage的方式清空数据, 因为上面是调用函数返回的， vue监听不到数据变化了。
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>