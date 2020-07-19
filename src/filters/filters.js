import Vue from 'vue'
Vue.filter('pricefilter',(val)=>{
    return  val.toFixed(2)
})
