// vue.config.js
const Path = require('path');
const glob = require('glob');

const pages = {}
const titles = {
  'index': 'Home',
  'abouts': 'About',
}

glob.sync('./src/pages/**/main.js').forEach(path => {
  let pageName = path.split('./src/pages/')[1].split('/main.js')[0]
  pages[pageName] = {
    entry: path,
    filename: pageName + '.html',
    template: `./src/pages/${pageName}/${pageName}.html`,
    title: titles[pageName],
    chunks: ['chunk-vendors', 'chunk-common', pageName],
  }
  console.log(pages[pageName])
})


/*
*  https://www.jianshu.com/p/e4716e5bc8bb(路径)
*/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/youzan_demo/'
    : '/',
  pages,
  runtimeCompiler: true,
  chainWebpack: (config)=>{
    config
      .resolve.alias
        .set('@', Path.join(__dirname, 'src'))
        .set('css', Path.join(__dirname, 'src/modules/css'))
        .set('js', Path.join(__dirname, 'src/modules/js'))
        .set('components', Path.join(__dirname, 'src/components'))
  }
}