import Mock from "mockjs";

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
  evaluation: "/goods/evaluation",
  update: "/cart/update",
  list: "/cart/list",
  reduce: "/cart/reduce",
  remove: "/cart/remove",
  mrremove: "/cart/mrremove",
  addressAdd: "/address/add",
  addressRemove: "/address/remove",
  addressList: "/address/list",
  addressUpdate: "/address/update",
  addressSetDefault: "/address/setDefault"
}

Mock.mock(/http:\/\/rap2api\.taobao\.org\/app\/mock\/7058/, function (opt) {
  let data_url = opt.url.substring(39)
  switch (data_url) {
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
    case url.search:
      return Mock.mock({
        "status": 200,
        "message": "ok",
        "lists|8": [{
          "id|10000-99999": 1,
          "img": "@image(320x320,@color)",
          "name": "@ctitle",
          "price|1-100.2-2": 1,
          "isOut|1-2": true,
          "isPostage|1": false
        }]
      })
    case url.details:
      return Mock.mock(
        {
          "data": {
            "imgs": [
              "http://dummyimage.com/375x375/f2a879",
              "http://dummyimage.com/375x375/79d7f2",
              "http://dummyimage.com/375x375/bef279"
            ],
            "originalPrice|100-999": 1,
            "postage": "免运费",
            "price|5-99": 1,
            "sales|500-800": 1,
            "title": "寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤",
            "storeName": "寻找田野",
            "skuList|2": [
              {
                "lists": [
                  "1个",
                  "2个"
                ],
                "title": "@order('净含量','个数')"
              }
            ],
            "remain|100-400": 1,
            "identification": [
              "企业认证",
              "担保交易"
            ],
            "description": "<div class=\"js-components-container components-container\"> <div class=\"custom-richtext js-lazy-container js-view-image-list\"> <p><img data-origin-width=\"720\" data-origin-height=\"713\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"494\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"916\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"656\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"513\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"691\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Fs5rqsKzMe7qIHhuQAqyM1lcjmfB.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Fs5rqsKzMe7qIHhuQAqyM1lcjmfB.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"531\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Foor6_Ipc-Lo9eOX_H_a8g4kWPRW.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Foor6_Ipc-Lo9eOX_H_a8g4kWPRW.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"932\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FuuNBFbA_vMYmI6FFbNOemmDX9bd.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FuuNBFbA_vMYmI6FFbNOemmDX9bd.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"707\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FotgIfOUlMtvhtH0dhRLlmpKJLv7.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FotgIfOUlMtvhtH0dhRLlmpKJLv7.jpg!730x0.jpg\"></p> </div> <div class=\"price-intro\"> <h4>划线价格说明<i class=\"icon-arrow\"></i></h4> <p>划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考。</p> <p>未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。 </p> <p>*此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准。</p> </div> </div>"
          },
          "message": "",
          "status": 200
        }
      )
    case url.details:
      return Mock.mock({
        "data": {
          "lists|3": [
            {
              "buyer": "@cname",
              "num|1-5": 1,
              "time": "@time"
            }
          ]
        },
        "status": 200,
        "message": ""
      })
    case url.evaluation:
      return Mock.mock({
        "message": "",
        "status": 200,
        "data": {}
      })
    case url.addCart:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.update:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.list:
      return Mock.mock({
        "status": 200,
        "message": "",
        "cartList|3": [
          {
            "shopTitle|+1": [
              "寻找田野",
              "猫咪森林",
              "老爹果园"
            ],
            "shopId|10000-99999": 1,
            "goodsList|1-3": [
              {
                "id|10000-99999": 1,
                "img": "@image(90x90,@color)",
                "number|1-10": 1,
                "price|10-150": 1,
                "sku|+1": [
                  "全网通，玫瑰金，3+32G",
                  "全网通，香槟金，3+32G"
                ],
                "title": "VIVO-Y66 全网通/移动版 3+32GB"
              }
            ]
          }
        ]
      })
    case url.reduce:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.remove:
      return Mock.mock({
        "message": "",
        "status": 200
      })
    case url.mrremove:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.addressAdd:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.addressRemove:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    case url.addressList:
      return Mock.mock({
        "status": 200,
        "lists|3": [
          {
            "address|+1": [
              "肯德基",
              "金拱门"
            ],
            "cityName": "杭州",
            "cityValue|+1": [
              "330100",
              "330100",
              "330100"
            ],
            "districtValue|+1": [
              "330102",
              "330103",
              "330104"
            ],
            "districtName|+1": [
              "上城区",
              "下城区",
              "江干区"
            ],
            "id|10000-100000": 1,
            "isDefault|+1": [
              true,
              false,
              false
            ],
            "name": "@cname",
            "provinceValue": 330000,
            "provinceName": "浙江省",
            "tel": 8808208820
          }
        ]
      })
    case url.addressUpdate:
      return Mock.mock({
        "message": "",
        "status": 200
      })
    case url.addressSetDefault:
      return Mock.mock({
        "status": 200,
        "message": ""
      })
    default:
      return Mock.mock({ msg: "无相关接口" });
  }
})
