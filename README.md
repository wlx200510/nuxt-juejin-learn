# nuxt-juejin-learn

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

*Note: Due to a bug in yarn's engine version detection code if you are
using a prerelease version of Node (i.e. v7.6.0-rc.1) you will need to either:
  1. Use `npm install`
  2. Run `yarn` with a standard release of Node and then switch back

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

important link:
- [解决nuxtjs本地开发跨域和防止路由与api冲突问题](https://segmentfault.com/a/1190000010815403)
- [nuxtjs/axios文档](https://axios.nuxtjs.org/usage.html)
- [nuxtjs官网/plugins](https://zh.nuxtjs.org/api/configuration-plugins)

@todo:
[以后要实现的一个系统](https://segmentfault.com/a/1190000011418518#articleHeader2)
这个仓库目前要改造所有数据获取放到一起，然后针对不同情况用不同的axios的接触方式