'use strict'
const path = require('path')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

  const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  devServer: {
    //内网穿透
    disableHostCheck: true,
    port: 8082,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://172.19.25.70:8087/found-evaluation`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'vant': 'vant',
      'axios': 'axios',
     
  },
  },
  chainWebpack(config) {

    const cdn = {
        css: [
            // element-ui css
          'https://cdn.jsdelivr.net/npm/vant@2.10/lib/index.css'
        ],
        js: [
            "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js",
            "https://cdn.jsdelivr.net/npm/vue-router@3.1.5/dist/vue-router.min.js",
            "https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js",
              "https://cdn.jsdelivr.net/npm/vant@2.10/lib/vant.min.js",
             'https://cdn.bootcss.com/axios/0.19.2/axios.js',
             
        ]
    }
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
  })
     // 打包分析
     if (IS_PROD) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
   
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        .end()

    // set preserveWhitespace


    config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options
        })
        .end()

    config
        // https://webpack.js.org/configuration/devtool/#development
        .when(process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
        )

    config
        .when(process.env.NODE_ENV !== 'development',
            config => {
                config
                    .plugin('ScriptExtHtmlWebpackPlugin')
                    .after('html')
                    .use('script-ext-html-webpack-plugin', [{
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }])
                    .end()
                config
                    .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                config.optimization.runtimeChunk('single')
            }
        )
},
css: {

  loaderOptions: {
      scss: {
          prependData: `@import "~@/base.scss";`
      },
      postcss: {
          plugins: [
              require('autoprefixer')(),
              require("postcss-px-to-viewport")({
                  unitToConvert: "px",
                  viewportWidth: 7500,
                  unitPrecision: 5,
                  propList: ["*", "!max-width"],
                  viewportUnit: "rem",
                  fontViewportUnit: "rem",
                  selectorBlackList: ["html"],
                  minPixelValue: 1,
                  mediaQuery: false,
                  replace: true,
                  exclude: [/node_modules/],
                  landscape: false,
                  landscapeUnit: "vw",
                  landscapeWidth: 568
              })
          ]
      }
  }
},
}