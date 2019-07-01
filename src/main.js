import './css/index.css'
//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouer from 'vue-router'
Vue.use(VueRouer)
//导入MUI样式
import './lib/mui/css/mui.min.css'

//扩展图标
import './lib/mui/css/icons-extra.css'
//按需导入Mint-UI中的组件
import MintUI from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//导入自己的router.js模块
import router from './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入整个MintUI
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
//导入app组件
import app from './app.vue'
//修改每个页面的title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
var vm = new  Vue({
    el:"#app",
    render(c) {
        return c(app);
    },
    router //挂载到实例上
})
console.dir(vm)
