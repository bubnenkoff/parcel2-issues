import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'
import Router from 'vue-router'
import { Network } from "vue-vis-network";

window.axios = require('axios');
Vue.use(ElementUI, { locale })
Vue.use(Router)
Vue.component('network', Network);


new Vue({
    el: '#app',
    render: h => h(App)
});