import Vue from 'vue';
// import Contents from './index.vue'
// import axios from 'axios'
// import url from 'js/api.js'

// import 'css/common.css';
import './member_base.css';
import './member.css';

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