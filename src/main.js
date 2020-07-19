import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import getinfo from '@network/getinfo.js';
getinfo().then((result) => {
  console.log(result);
  store.commit('saveuserinfo',result.data)
}).catch((err) => {
  console.log(err);
});
Vue.filter('pricefilter',(val)=>{
  return  parseInt(val).toFixed(2)
})
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
