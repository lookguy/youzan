import 'css/common.css';
import './index.css';

import Vue from 'vue';
import Contents from './index.vue'
import axios from 'axios'
import url from 'js/api.js'
console.log(Vue)

new Vue({
    created(){
        axios.get(url.hotList,{
            pageNum: 1,
            pageSize: 6
        })
        .then(res=>{
            this.lists = res.data.lists
        })
    },
    el: '#app',
    data: {
        lists: null,
        title: '有店推荐'
    },
    render: h => h(Contents),
})