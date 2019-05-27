// vue.config.js
const path = require('path');
const glob = require('glob');

const pages = {}
const titles = {
  'index': 'Home',
  'abouts': 'About',
}

glob.sync('./src/pages/**/main.js').forEach(path => {
  const pageName = path.split('./src/pages/')[1].split('/main.js')[0]
  pages[pageName] = {
    entry: path,
    filename: pageName + '.html',
     // If doesn't exist, fallback to 'public/index.html'
    template: pageName + '.html',
    title: titles[pageName],
    chunks: ['chunk-vendors', 'chunk-common', pageName],
  }
})

const isDev = (process.env.NODE_ENV === 'development')

/*
*  https://www.jianshu.com/p/e4716e5bc8bb(路径)
*/
module.exports = {
  pages,
  productionSourceMap: isDev,
  runtimeCompiler: true,
  chainWebpack: (config)=>{
    config
      .resolve.alias
        .set('@', path.join(__dirname, 'src'))
        .set('css', path.join(__dirname, 'src/modules/css'))
        .set('js', path.join(__dirname, 'src/modules/js'))
        .set('components', path.join(__dirname, 'src/components'))
  }
}