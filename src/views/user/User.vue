<template>
  <div class="home">
        <van-tabbar v-model="active" route >
            <van-tabbar-item icon="star-o" to="/home">精选</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>



export default {
  name: 'User',
  components: {

  },
  data() {
    return {
      active:2
    }
  },
}
</script>
