import VueRouter from 'vue-router'

//导入对应的组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopCarContainer from './components/tabbar/shopCarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newslist from './components/newslist/newslist.vue'
import newsCont from './components/newsCont/newsinfo.vue'
import photo from './components/Photo/photo.vue'
import goodList from './components/goods/goodList.vue'
import goodInfo from './components/goods/goodInfo.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home',meta:{title:'首页'}},//路由重定向
        {path:'/home',component:homeContainer,meta: {
                title: '首页'
            }},
        {path:'/member',component:memberContainer},
        {path:'/shopcar',component:shopCarContainer},
        {path:'/search',component:searchContainer},
        {path:'/home/newlist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsCont},
        {path:'/home/photo',component:photo,meta: {
                title: '商家入驻'
            }},
        {path:'/home/goodsList',component:goodList},
        {path:'/home/goodInfo/:id',component:goodInfo},
    ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类是router-link-active
})
//把路由暴露出去
export default router