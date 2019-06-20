import Vue from 'vue';
import 'js/mock.js'
import router from './router/main'
import store from './vuex/main'

new Vue({
    el: '#app',
    router,
    store,
    data: {
        lists: null,
        loading: false,
        finished: false,
        error: false,
        pageNum: 1,
        bannerLists: null
    },
})

