import Vue from 'vue';
// import Contents from './index.vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import 'js/mock.js'
import mixin from 'js/mixin'

import 'css/common.css';
import './search.css';

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
    created(){
        this.getSearchList()
    },
    el: '#app',
    data: {
        searchList: null,
        keyword,
        isShow: false
    },
    methods:{
        getSearchList(){
            axios.get(url.search,{keyword,id})
            .then(res=>{
                console.log(res)
                this.searchList = res.data.lists
            })
        },
        move(){
            if(document.body.scrollTop> 100 || document.documentElement.scrollTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){
            document.documentElement.scrollTo(0,0)
        }
    },
    mixins: [mixin]
})