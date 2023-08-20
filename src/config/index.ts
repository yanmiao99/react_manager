/**
 * 环境配置封装
 */

type ENV = 'dev' | 'prd'

let env: ENV = 'dev'
if (location.host.indexOf('localhost') > -1 || location.host === '127.0.0.1:8080') {
  env = 'dev'
} else {
  env = 'prd'
}

//const env = (document.documentElement.dataset.env as ENV) || 'dev'
const icode = '4DD9BD29ACF528AA'

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    icode
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    icode
  }
}

export default {
  env,
  ...config[env]
}
