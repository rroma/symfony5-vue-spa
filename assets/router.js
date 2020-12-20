import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home'
import Login from './components/Login'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});