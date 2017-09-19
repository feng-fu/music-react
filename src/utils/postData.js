import axios from 'axios'
import Qs from 'qs'

const verify = {
  showapi_sign: '8a31cc27032f4356bedc2d53950d43dd',
  showapi_appid: 34383
}
export default {
  postRecommendData(id) {
    return axios.post(
      `https://route.showapi.com/213-4`,
      Qs.stringify({
        ...verify,
        topid: id
      }),
      {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
    )
  },
  searchData(keyword) {
    return axios.post(
      `https://route.showapi.com/213-1`,
      Qs.stringify({
        ...verify,
        keyword
      }),
      {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
    )
  }
}