import Vue from 'vue';
// import Contents from './index.vue'
// import axios from 'axios'
// import url from 'js/api.js'

// import 'css/common.css';
import './cart_base.css';
import './cart_trade.css';
import './cart.css';

import { List } from 'vant';

Vue.use(List);

new Vue({
    created(){
        this.onLoad();
        this.getBanner();
    },
    el: '#app',
    data: {
        lists: null,
        loading: false,
        finished: false,
        error: false,
        pageNum: 1,
        bannerLists: null
    },
})