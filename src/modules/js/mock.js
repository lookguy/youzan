import Mock from "mockjs";

let url = {
    hotList: '/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    rank: '/category/rank',
    subList: '/category/subList',
}

Mock.mock(/http:\/\/rap2api\.taobao\.org\/app\/mock\/7058/,function(opt){
    let data_url = opt.url.substring(39)
    switch (data_url){
        case url.hotList:
            return Mock.mock({
                "lists|6": [
                  {
                    "id|10000-99999": 1,
                    "img": "@image(178x178,@color)",
                    "name": "@ctitle",
                    "price|1-100.2-2": 1
                  }
                ]
              })
        case url.banner:
            return Mock.mock({
                "lists|3": [
                  {
                    "clickUrl": "@url",
                    "img": "@image(375x180,@color)"
                  }
                ]
              })
        case url.topList:
            return Mock.mock({
                "lists|6": [
                  {
                    "id|+1": [
                      800,
                      810,
                      817,
                      811,
                      812,
                      813,
                      814
                    ],
                    "name|+1": [
                      "综合排行",
                      "食品酒水",
                      "女人穿着",
                      "男士穿着",
                      "箱包",
                      "首饰",
                      "数码电器",
                      "居家百货",
                      "母婴用品"
                    ]
                  }
                ]
              })
        case url.rank:
            return Mock.mock({
                "data": {
                  "hotGoods|3": [
                    {
                      "id|+1": 4,
                      "img": "@image(90x90,@color)",
                      "name": "/测试商品\\w{5}/",
                      "price|+1": [
                        89,
                        29,
                        46.8
                      ],
                      "recommend|+1": [
                        8844,
                        5765,
                        3770
                      ]
                    }
                  ],
                  "hotKeywords": [
                    "化妆水",
                    "连衣裙",
                    "凉鞋女",
                    "面膜",
                    "防晒",
                    "蓝牙音箱",
                    "小白鞋",
                    "裤子",
                    "衬衫"
                  ],
                  "hotShops|3": [
                    {
                      "clickUrl": "www.baidu.com",
                      "follows|+1": [
                        987750,
                        584180,
                        574948
                      ],
                      "name|+1": [
                        "幸福西饼",
                        "HomeFacial Pro",
                        "物业365"
                      ],
                      "imgs": [
                        "http://dummyimage.com/68x68/f2a879",
                        "http://dummyimage.com/68x68/79d7f2",
                        "http://dummyimage.com/68x68/bef279"
                      ]
                    }
                  ]
                },
                "message": "成功",
                "status": 222
              })
        case url.subList:
            return Mock.mock({
                "status": 222,
                "message": "成功",
                "data": {
                  "categoryList|5": [
                    {
                      "id|+1": [
                        10,
                        835,
                        839,
                        842,
                        9
                      ],
                      "name|+1": [
                        "水果",
                        "生鲜",
                        "饼干蛋糕",
                        "坚果炒货",
                        "休闲零食"
                      ],
                      "img": "@image(60x60,@color)"
                    }
                  ],
                  "brandList|4-6": [
                    {
                      "id|+1": [
                        85,
                        83,
                        82,
                        81,
                        80,
                        79
                      ],
                      "name|+1": [
                        "良品铺子",
                        "周黑鸭",
                        "来伊份",
                        "五谷磨坊",
                        "龙润",
                        "齐峰果业"
                      ],
                      "img": "@image(60x60,@color)"
                    }
                  ]
                }
              })
        default:
            return Mock.mock({msg:"无相关接口"});
    }
})
