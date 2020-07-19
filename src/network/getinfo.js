import ajax from '@network/ajax';

const getinfo = ()=>{
    return ajax({
        url:'user/info',
        method:'get'
    })
 }
 export default  getinfo