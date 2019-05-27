import 'css/common.css';
import './index.css';
import Vue from 'vue';
import Contents from './index.vue'

new Vue({
    el: '#app',
    render: h => h(Contents)
})