import axios from 'axios'

const httpbinConfig = {
  baseURL: 'http://httpbin.org'
}

export default {

  get() {
    return axios.get('/get', httpbinConfig)
      .then(res => res.data)
  }

}
