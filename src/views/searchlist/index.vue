<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      v-model="querySearch"
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item">综合</div>
      <div class="sort-item">销量</div>
      <div class="sort-item">价格 </div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in goodsList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import {getGoodsList} from '@/api/product.js';

export default {
  name: 'SearchListIndex',
  components: {
    GoodsItem
  },
  data() {
    return {
      goodsList: [],
      page: 1
    }
  },
  computed: {
    querySearch() {
      // log(`searchList query is: `, this.$route.query)
      return this.$route.query.search
    }
  },
  async created() {
    log(`分类页面`, this.$route.query.categoryId)
    const {data: {list}} = await getGoodsList({
      categoryId: this.$route.query.categoryId,  // 教程中这个数据来源是 , 分类页面跳转过来的时候携带的, 
      // bug? 觉得有bug
      goodsName: this.querySearch,
      page: this.page
    })
    this.goodsList = list.data
    log(`searchList res is`, this.goodsList)
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>