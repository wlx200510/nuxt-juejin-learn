import * as asyncData from '~/data/index.js'
/**
 * '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: { '^/api': '' }
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '^/japi': '' }
    },
    '/rapi': {
      target: 'https://recommender-api-ms.juejin.im',
      pathRewrite: { '^/rapi': '' }
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/tapi': '' }
    }
 */


export const banner = async (store, params) => {
  var data = await asyncData.getBannerData()
  return data
}

export const categories = async (store, params) => {
  var data = await asyncData.getCategoriesData()
  return data
}

export const recommend = async (store, params) => {
  var data = await axios.get(`${rapi}/v1/get_recommended_entry`, params)
  return data
}

export const entries = async (store, params) => {
  var data = await axios.get(`${tapi}/v1/get_entry_by_rank`, params)
  return data
}
