import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home'
import Login from './components/Login'
import PostList from './components/PostList'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/posts', name: 'post_list', component: PostList },

        // otherwise redirect to home
        { path: '*', redirect: '/home' }
    ]
});