import {request} from "./request";


export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//首页数据请求（流行，新款，精选）
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })

}

