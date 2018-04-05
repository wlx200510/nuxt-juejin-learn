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
  var data = await asyncData.getBannerData(store, params)
  return data
}

export const categories = async (store, params) => {
  var data = await asyncData.getCategoriesData(store, params)
  return data
}

export const recommend = async (store, params) => {
  var data = await asyncData.getRecommendData(store, params)
  return data
}

export const entries = async (store, params) => {
  var data = await asyncData.getEntriesData(store, params)
  console.log(data)
  return data
}
