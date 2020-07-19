<template>
<!-- 导航 -->
  <div class="home">
    <van-nav-bar  title="精选" fixed placeholder >
    <template #left>  
      <van-icon name="location-o"  size="18"/>深圳市
    </template>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <!-- 商品列表 -->
    <main ref="main" @scroll="mainscroll">
      <div class="item" v-for=" item in productlist" :key="item.id" @click="gos(item.id)">
        <div class="img">
          <img :src="item.cover" alt="">
        </div>
        <div class="des">
          <h3>{{item.name}}</h3>
          <p class="price">￥{{item.price|pricefilter}}</p>
        </div>
      </div>
   
      
    </main>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="star-o" to="/home">精选</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import {getproductlist} from '@network/api'


export default {
  name: 'Home',
  components: {

  },
   data() {
    return {
      active: 0,
      productlist:[],
      mainheight:0,
      page:1,
      totalPages:0,
      flag:true
    };
  },
  created() {
   this.getlist()
  },
  mounted() {
   this.mainheight = this.$refs.main.clientHeight
  },
  methods: {
   async getlist(){
     const page =this.page
     const data = await getproductlist(page)
     console.log(data);
     this.flag = true
     this.totalPages = data.data.totalPages
     this.productlist =[...this.productlist,...data.data.data] 
    },
    mainscroll(){
      const {scrollHeight,scrollTop} = this.$refs.main
    if(scrollHeight<= scrollTop + this.mainheight+1){
      
      if(!this.flag){
        return
      }
      this.flag = false
      this.page+=1
      if(this.totalPages<this.page){
        this.$toast('到底了');
        this.page+=-1
        this.flag = true
        return
      }
      this.getlist()
    }
    },
    //去详情页
    gos(id){
      this.$router.push({path:'/productInfo',query:{id}})
      console.log(id);
    }
  },
}
</script>
<style lang="less">
  .home{
    .van-nav-bar{
      box-shadow: rgba(0, 0, 0, .2) 0 1px 1px ;
    }
    main{
      -webkit-overflow-scrolling: touch;
      overflow-y: scroll;
      height: calc(100vh - 96px);
      padding: 6px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item{
        margin: 4px 0;
        position: relative;
        box-sizing: border-box;
        padding: 4px;
        width: 48vw;
        height: 280px;
        border: rgba(0, 0, 0, .2) 1px solid;
        border-radius:5px ;
        box-shadow: 0 0 4px rgba(0, 0, 0, .2);
        .img{
          margin-top: 2px;
         width:  100%;
         img{
            width: 100%;
            
         }
        }
        .des{
         
          width: 100%;
          position: absolute;
          bottom: 2px;
          left: 0;
          padding: 2px;
          h3{
         display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 14px;
          // text-indent: 2em;
          margin: 4px 0;

          }
          .price{
           color: #ff5500; 
           font-size: 13px;
           margin: 3px 0;
          }
        }

      }
    }

    .van-tabbar{
      box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);
    }
  }
</style>
