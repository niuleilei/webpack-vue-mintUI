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
    //1.导入vuex包   cnpm i vuex -S
    import Vuex from 'vuex'
    //2.注册vuex到vue中
    Vue.use(Vuex)
    //3. 通过new Vuex.Store() 实例  得到一个数据仓库对象
  var store=new Vuex.Store({
      state:{
          //在其他组件中，想要访问store中的数据，通过this.$store.state.xxx访问
          count:0
      },
      mutations:{
          //如果要操作store中的state的值，只能调用mutations提供的方法，才能操作对应的数据，不推荐直接操作state中的数据，因为每个组件都有可能操作数据的方法

          //其他组件调用mutations中的方法，只能通过this.$store.commit("方法名")
        aaa(state){
            state.count++
        },
          bbb(state,a){
            //mutations 的函数参数列表中，最多支持两个参数，参数1 是state状态， 参数2是通过commit提交过来的参数
              //参数2可以通过对象的形式传递多个参数
              state.count-=a
          }
      },
      getters:{
      //    这里的getter只负责对外提供数据，不负责修改数据，，如果想要修改state中的数据，找mutations
          //修改state中的值，就会触发，相当于组件中的过滤器
          opt:function (state) {
              return  '当前的count数据'+state.count
          }
      }
  })
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
    router, //挂载到实例上
    store  //vuex挂载到vue中  只要挂载到vm上，任何组件都能使用store来存储数据
})
console.dir(vm)
