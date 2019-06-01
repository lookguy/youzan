import 'css/common.css';
import './category.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js'

import Foot from 'components/Foot.vue'

new Vue({
    el: '#app',
    data: {
        topLists:null,
        topIndex: 0,
        subData: null,
        rankData: null,
    },
    created(){
        this.getTopList();
        this.getSubList(0)
    },
    methods:{
        getTopList(){
            axios.get(url.topList)
            .then(res=>{
                this.topLists = res.data.lists;
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getSubList(index,id){
            this.topIndex = index;
            if(index===0){
                this.getRank()
            }else{
                axios.get(url.subList,{id})
                .then(res=>{
                    this.subData = res.data.data;
                })
            }
        },
        getRank(){
            axios.get(url.rank)
                .then(res=>{
                    this.rankData = res.data.data;
                    console.log(this.rankData)
                })
        },
    },
    filters:{
        formatPrice(price){
            if (!price) return '0.00';
            let prices= price.toString();
            let result = prices.indexOf(".");
            if(result === -1){
                return `${prices}.00`
            }else{
                let indexPoint = prices.indexOf(".");
                let base = prices.substring(0,indexPoint+1);
                let point = prices.substr(indexPoint+1,2);
                return point.length>1? `${base+point}`:`${base+point}0`
            }
        }
    },
    components: {
        Foot
    },
})