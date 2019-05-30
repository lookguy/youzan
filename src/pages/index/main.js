import Vue from 'vue';
// import Contents from './index.vue'
import axios from 'axios'
import url from 'js/api.js'

import 'css/common.css';
import './index.css';
import { List } from 'vant';

Vue.use(List);

new Vue({
    created(){
        this.onLoad()
    },
    el: '.index',
    data: {
        lists: null,
        loading: false,
        finished: false,
        error: false,
        pageNum: 1,
    },
    methods: {
        onLoad() {
            this.loading = true
            setTimeout(() => {
                axios.get(url.hotList,{
                    pageNum: this.pageNum++,
                    pageSize: 4
                })
                .then(res=>{
                    let curLists = res.data.lists
                    if(this.lists){
                        if(this.pageNum>5){this.finished = true}
                        this.lists = this.lists.concat(curLists)
                    }else{
                        //frist data
                        this.lists = curLists
                    }
                })
                .catch(()=>{
                    this.error = true;
                })
                .finally(()=>{
                    this.loading = false
                })
            }, 500);
        }
      }
})