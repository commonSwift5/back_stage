import axios from 'axios'
const service = axios.create()
//  请求拦截器主要处理token 的统一注入问题
service.interceptors.request.use()
// 响应拦截器 处理返回的数据异常和数据结构
service.interceptors.response.use()

export default service
