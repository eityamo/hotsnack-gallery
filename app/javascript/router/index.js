import Vue from 'vue'
import Router from 'vue-router'
import Top from '../pages/Top'
import HotsnackDetail from '../pages/HotsnackDetail'
import CategoryList from '../pages/CategoryList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Top,
            name: 'Top',
        },
        {
            path: '/hotsnack/:item_uuid',
            component: HotsnackDetail,
            name: 'HotsnackDetail',
        },
        {
            path: '/categories',
            component: CategoryList,
            name: 'CategoryList',
        },
    ],
})
export default router
