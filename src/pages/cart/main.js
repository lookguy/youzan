import Vue from 'vue';
import mixin from "js/mixin.js"
import axios from "axios"
import url from "js/api.js"
import 'js/mock.js'
import animejs from 'animejs'

// import 'css/common.css';
import './cart_base.css';
import './cart_trade.css';
import './cart.css';
// import 'vant/lib/index.css';

import { List, Dialog } from 'vant';
import { type } from 'os';
import { of } from 'rxjs';

Vue.use(List).use(Dialog);

new Vue({
    created() {
        this.getList()
    },
    el: '#app',
    data: {
        lists: null,
        total: 0,
        editingShop: null,
        editingShopIndex: -1,
        // editingShow: true
    },
    computed: {
        allSelected: {
            get() {
                if (this.lists && this.lists.length) {
                    return this.lists.every(shop => {
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal) {
                this.lists.forEach(shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach(good => {
                        good.checked = newVal
                    })
                })
            }
        },
        allRemoveSelected: {
            get() {
                if (this.editingShop) {
                    return this.editingShop.removeChecked
                }
                return false
            },
            set(newVal) {
                if (this.editingShop) {
                    this.editingShop.removeChecked = newVal
                    this.editingShop.goodsList.forEach(good => {
                        good.removeChecked = newVal
                    })
                }
            }
        },
        selectLists() {
            if (this.lists && this.lists.length) {
                let arr = []
                let total = 0
                this.lists.forEach(shop => {
                    shop.goodsList.forEach(good => {
                        if (good.checked) {
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        removeLists() {
            if (this.editingShop) {
                let arr = []
                this.editingShop.goodsList.forEach(good => {
                    if (good.removeChecked) {
                        arr.push(good)
                    }
                })
                return arr
            }
            return []
        },
    },
    methods: {
        getList() {
            axios.get(url.cartLists)
                .then(res => {
                    let lists = res.data.cartList
                    lists.forEach(shop => {
                        shop.checked = true
                        shop.removeChecked = false
                        shop.editing = false
                        shop.editingMsg = '编辑'
                        shop.goodsList.forEach(good => {
                            good.checked = true
                            good.removeChecked = false
                        })
                    });
                    this.lists = lists
                })
        },
        selectGood(shop, good) {
            let attr = this.editingShop ? 'removeChecked' : 'checked'
            good[attr] = !good[attr]
            shop[attr] = shop.goodsList.every(good => {
                return good[attr]
            })
        },
        selectShop(shop) {
            let attr = this.editingShop ? 'removeChecked' : 'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good => {
                good[attr] = shop[attr]
            })
        },
        selectAll() {
            let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
            this[attr] = !this[attr]
        },
        edit(shop, shopIndex) {
            shop.editing = !shop.editing
            shop.editingMsg = shop.editing ? '完成' : '编辑'
            this.lists.forEach((item, i) => {
                if (shopIndex !== i) {
                    item.editing = false
                    item.editingMsg = shop.editing ? "" : "编辑"
                }
            })
            this.editingShop = shop.editing ? shop : null
            this.editingShopIndex = shop.editing ? shopIndex : -1
        },
        reduce(good) {
            if (good.number === 1) return
            axios.get(url.cartreduce, { id: good.id, number: 1 })
                .then(res => {
                    console.log(`减少了id为${good.id}的商品,下方为mock模拟回的数据`, res)
                    good.number--
                })
        },
        add(good) {
            axios.get(url.addCart, { id: good.id, number: 1 })
                .then(res => {
                    console.log(`增加了id为${good.id}的商品,下方为mock模拟回的数据`, res)
                    good.number++
                })
        },
        remove(shop, shopIndex, good, goodIndex) {
            Dialog.confirm({
                title: '清除宝贝',
                message: '确定要清除购物车上的物品'
            }).then(() => {
                axios.get(url.cartRemove, { id: good.id })
                    .then(res => {
                        console.log("删除成功", res)
                        if (shop.goodsList.length===1) {
                            this.lists.splice(shopIndex, 1)
                            this.removeShop()
                        }
                        shop.goodsList.splice(goodIndex, 1)
                    })
            }).catch(() => {
                return false
            });
        },
        removeShop() {
            this.editingShop?this.editingShop = !this.editingShop:""
            this.lists.forEach(shop => {
                shop.editing = false
                shop.editingMsg = '编辑'
            })
        },
        deleteAll() {
            Dialog.confirm({
                title: '清除确认',
                message: '清除商店所有物品'
            }).then(() => {
                let goodIndex = []
                let goodRemoveArr = this.removeLists.map(item => {
                    goodIndex.push(this.editingShop.goodsList.indexOf(item))
                    return item.id
                })
                let shop = this.editingShop;
                let shopIndex = this.lists.indexOf(this.editingShop)
                axios.get(url.cartMremove, { goodRemoveArr: goodRemoveArr })
                    .then(res => {
                        goodIndex.reverse().forEach((index) => {
                            shop.goodsList.splice(index, 1)
                        })
                        if (!shop.goodsList.length) {
                            this.lists.splice(shopIndex, 1)
                            this.removeShop()
                        }
                        console.log("删除成功", res)
                    })
            }).catch(() => {
                return false
            });
        },
        start(e, good) {
            good.startX = e.changedTouches[0].clientX
        },
        end(e, shopIndex, good, goodIndex) {
            let endX = e.changedTouches[0].clientX
            let left = '0'
            if (good.startX - endX > 50) {
                left = '-60px'
            }
            if (endX - good.startX> 50) {
                left = '0px'
            }
            
            animejs({
                targets: this.$refs[`goods-${shopIndex}-${goodIndex}`],
                translateX: left,
                duration: 500,   
            })
        }
    },
    mixins: [mixin]
})