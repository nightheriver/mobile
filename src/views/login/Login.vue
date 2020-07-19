<template>
  <div class="login">
      <van-nav-bar  title="登录/注册" fixed placeholder left-text="返回" left-arrow @click-left="$router.back()"></van-nav-bar>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
import{logins} from '@network/api'
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'Login',
  components: {

  },
  data() {
    return {
      username: 'hdk123',
      password: 'hdk123',
    }
  },
  created(){
 
  },
   methods: {
   async onSubmit(values) {
      console.log('submit', values);
    const {name,password} = values
    const data = await logins(name,password)
    console.log(data);
    if(data.errcode !== 0){
      this.$toast('登录失败')
      return
    }
    sessionStorage.setItem('token',data.data.token)
    console.log(data.data.token);
    this.saveuserinfo(data.data)
    this.$router.back()
    },
  ...mapMutations(['saveuserinfo'])
   },
   computed: {
     ...mapState(['userinfo'])
   },
}
</script>
