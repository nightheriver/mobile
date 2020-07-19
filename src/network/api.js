import ajax from '@network/ajax';
export const getproductlist = (page=1,size=10)=>{
   return ajax({
       url:'/product/pagination',
       method:'get',
       params:{
        page,size
       }
   })
}

export const getdetailproduct = (id)=>{
    return ajax({
        url:'/product',
        method:'get',
        params:{
         id
        }
    })
 }

 export const logins = (name,password)=>{
    return ajax({
        url:'/user/signin',
        method:'post',
        data:{
            name,password
        }
    })
 }