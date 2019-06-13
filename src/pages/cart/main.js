import Vue from 'vue';
import mixin from "js/mixin.js"
import axios from "axios"
import url from "js/api.js"
import 'js/mock.js'

// import 'css/common.css';
import './cart_base.css';
import './cart_trade.css';
import './cart.css';

import { List } from 'vant';

Vue.use(List);

new Vue({
    created() {
        this.getList()
    },
    el: '#app',
    computed: {

    },
    data: {
        lists: null,
    },
    methods: {
        getList() {
            axios.get(url.cartLists)
                .then(res => {
                    let lists = res.data.cartList
                    lists.forEach(shop => {
                        shop.checked = true
                        shop.goodsList.forEach(good => {
                            good.checked = true
                        })
                    });
                    this.lists = lists
                })
        },
        selectGood(good) {
            good.checked = !good.checked
        }
    },
    mixins: [mixin]
})