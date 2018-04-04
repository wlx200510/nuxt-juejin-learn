import qs from 'qs'

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // if the requestMethod is POST, You should change you data transfer Type
    if (config.method === 'post') {
      config.withCredentials = true
      config.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
      config.headers['X-Requested-With'] = 'XMLHttpRequest'
      config.timeout = 5000
      config.responseType = 'json'
      config.data = qs.stringify(config.data)
    }
    console.log('Making request to ' + config.url)
    return config
  })

  $axios.onResponse((res) => {
    // if (res.status !== 200) {
    //   Message({
    //     showClose: true,
    //     type: 'warning',
    //     message: res.data.msg
    //   })
    //   return Promise.reject(res)
    // }
    return res.data
  }, (error) => {
    // if (error.response.status === 403) {
    //   Message({
    //     showClose: true,
    //     type: 'warning',
    //     message: '用户无权限访问数据，请联系管理员进行授权'
    //   })
    // } else {
    //   Message({
    //     showClose: true,
    //     type: 'warning',
    //     message: error.message
    //   })
    // }
    return Promise.reject(error)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 400) {
      redirect('/400')
    }
  })
}
