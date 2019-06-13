let url = {
    hotList: '/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    rank: '/category/rank',
    subList: '/category/subList',
    search: '/search/list',
    details: '/goods/details',
    deals: '/goods/deal',
    addCart: '/cart/add',
    cartLists: '/cart/list',
    cartreduce: '/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove: '/cart/mremove',
}

let host = 'http://rap2api.taobao.org/app/mock/7058'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url
