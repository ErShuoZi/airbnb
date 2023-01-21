import axios from 'axios'
import {BASE_URL,TIME_OUT} from './config'

class LsRequest {
  constructor(BASE_URL,TIME_OUT){ 
    this.instance = axios.create({
      baseURL:BASE_URL,
      timeout:TIME_OUT
    })
    this.instance.interceptors.request.use((config)=> {
      return config
    })
    this.instance.interceptors.response.use((response) => {
      return response
    })
  }
  request(config) {
    return new Promise((resolve,reject) => {
      this.instance.request(config).then(res =>{
        resolve(res.data)
      }).catch(err => {
        return err
      })
    })
  }
  get(config) {
    return this.request({...config,method:"get"})
  }
  post(config) {
    return this.request({...config,method:"post"})
  }
  
}
//eslint-disable-next-line
export default new LsRequest(BASE_URL,TIME_OUT)