import Vue from 'vue';
import Router from 'vue-router'
import 'js/mock.js'

Vue.use(Router);

let routes = [{
    path: '/',
    components: require("./components/member.vue")
},{
    path: '/address',
    components: require("./components/address.vue"),
    children:[{
        path: '',
        redirect: 'all'
    },{
        path: 'all',
        name: 'all',
        components: require('./components/all.vue')
    },{
        path: 'form',
        name: 'form',
        components: require('./components/form.vue')
    }]
}]

let router = new Router({
    routes
})

new Vue({
    router,
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

