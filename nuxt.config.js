module.exports = {
  mode: 'universal',
  telemetry: false,
  /*
  ** Server configuration
  */
  server: {
    port: 8001,
    host: '192.168.0.103'
  },
  /*
  ** Environment variable configuration
  */
  env: {
    baseUrl: 'http://192.168.0.103:8001'
  },
  /*
 ** Router configuration
 */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: {
          name: 'timeline-title'
        }
      })
    }
  },
  /*
 ** Headers of the page
 */
  head: {
    title: '掘金',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' },
      { name: 'referrer', content: 'never' },
      { hid: 'keywords', name: 'keywords', content: '掘金,稀土,Vue.js,微信小程序,Kotlin,RxJava,React Native,Wireshark,敏捷开发,Bootstrap,OKHttp,正则表达式,WebGL,Webpack,Docker,MVVM' },
      { hid: 'description', name: 'description', content: '掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货，其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时，掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户，我们相信你也可以在这里有所收获。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-light.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/scss/global.scss',
    '~/assets/scss/element-variable.scss',
    '~/assets/scss/variable.scss',
  ],

  /*
   *  这个plugins可以理解为页面加载的时候，
   *  可以把需要注入到页面之前的操作
   *  plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
   *  每次你需要使用 Vue.use() 时，
   *  你需要在 plugins/ 目录下创建相应的插件文件，并在 nuxt.config.js 中的 plugins 配置项中配置插件的路径。
   **/
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/i18n.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
