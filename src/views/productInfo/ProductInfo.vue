<template>
 
    <div class="productInfo">
    <van-nav-bar  title="商品详情" fixed placeholder left-text="返回" left-arrow @click-left="$router.back()">
  </van-nav-bar>
  <main>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in detaildata.imgList" :key="item.id">
        <img :src="item.path" 
        alt="">
        </van-swipe-item>
     
    </van-swipe>
        <van-cell  >
        <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <h3>{{detaildata.name}}</h3>
        <p class="price">￥{{detaildata.price|pricefilter}}</p>
      </template>
    </van-cell>
    <div>
       <van-cell  >
      <template #title>
        <van-row>
          <van-col span="12">免运费</van-col>
          <van-col span="12">剩余: {{detaildata.stock}}</van-col>
        </van-row>
      </template>
    </van-cell>
     <van-cell >
     <template #title>
        <van-row>
          <van-col span="12">销量：{{detaildata.sales}}</van-col>
          <van-col span="12">收藏：{{detaildata.likes}}</van-col>
        </van-row>
      </template>
    </van-cell>
    </div>
    
    <van-tabs v-model="active" sticky offset-top="46px" >
      <van-tab title="图片">
        <img :src="item.path" alt="" v-for=" item in detaildata.detailImgList" :key="item.id">
           
      </van-tab>
      <van-tab title="参数 ">
          <van-cell  v-for=" item in detaildata.properties" :key="item.id">
            <template #title>
                <van-row>
                  <van-col span="12">{{item.name}}</van-col>
                  <van-col span="12">{{item.detail}}</van-col>
                </van-row>
              </template>
          </van-cell>
      </van-tab>
    </van-tabs>




  </main>
    <van-goods-action>
      <van-goods-action-icon icon="like-o" text="收藏"  />
      <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

  </div>
</template>

<script>
import {getdetailproduct} from '@network/api'


export default {
  name: 'ProductInfo',
  components: {

  },
  data() {
    return {
      detaildata:{},
        active: 0,
    }
  },
  created() {
    this.getdetail()
  },
  methods: {
    async getdetail(){
      const id = this.$route.query.id
      const data = await getdetailproduct(id)
      console.log(data);
      this.detaildata = data.data
    }
  },
}
</script>
<style lang="less">
   main{
    .my-swipe .van-swipe-item {
    color: #fff;
    img{
      width: 100vw;
      height: 300px;
    }
  }
  .price{
    color: #ff5500;
  }
   }
 
</style>
