import "./goods_common.css"
import "./goods_custom.css"
import "./goods.css"
import "./goods_theme.css"
import "./goods_mars.css"
import "./goods_sku.css"

import Vue from "vue"
import url from "js/api.js"
import axios from "axios"
import mixin from "js/mixin.js"
import qs from 'qs'
// import 'js/mock.js'
import { Loading } from 'vant';

Vue.use(Loading);

let { id } = qs.parse(location.search.substr(1))

let detailTab = ['商品详情', '本店成交']

new Vue({
    el: "#app",
    data: {
        details: null,
        detailTab,
        tabIndex: 0,
        dealLists: null
    },
    created() {
        this.getDetails()
    },
    methods: {
        getDetails() {
            axios.get(url.details, { id })
                .then(res => {
                    this.details = res.data.data
                })
        },
        changeTab(index) {
            this.tabIndex = index
            if (index == 1) {
                this.getDeal()
            }
        },
        getDeal() {
            axios.get(url.deals, { id })
                .then(res => {
                    console.log(res)
                    this.dealLists = res.data.data.lists
                })
        }
    },
    mixins: [mixin]
})