import axios from 'axios';
import router from '../router/index'
const ajax = (config)=>{
    const ins =axios.create({
        baseURL: '/api/v4'
    })
    
    ins.interceptors.request.use(config =>{
        config.headers.Authorization = sessionStorage.getItem('token')
        return config
    })
    ins.interceptors.response.use(result =>{
        if (result.data.errcode === 90101){
            sessionStorage.setItem('token','')
            router.push("/login")
          }
        console.log(result);
        return result.data
    })
   
   return ins(config)
    
}
export default ajax