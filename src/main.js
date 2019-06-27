import './css/index.css'

console.log(123)
import Vue from 'vue'
//导入MUI样式
import './lib/mui/css/mui.min.css'
//按需导入Mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)
//导入整个MintUI
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
//导入app组件
import app from './app.vue'

var vm = new  Vue({
    el:"#app",
    render(c) {
        return c(app);
    }
})
