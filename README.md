*商城

##制作首页app组件
1.mint-UI头部
2.MUI tabbar底部
3.中间区域放一个router-view 展示组件

**改造tabbar为router-link
**设置路由高亮
点击tabbar中的路由连接，展示对应的组件

##制作首页轮播图布局
加载轮播图数据vue-resource    v-for循环渲染

##改造新闻资讯路由连接
//新闻制作 

##实现新闻资讯列表跳转到新闻详情页面
1.把列表中的每一项，改造为router-link，同时跳转是提供唯一标识符
2.创建新闻详情页面组件，newsinfo.vue

##单独封装一个comment.vue评论子组件
1.创建一个.vue组件模板
2.需要的页面中手动导入 import comment from' ./comment.vue'
3.在父组件中使用components属性，将刚才导入comment组件，注册为自己的子组件
4.将注册子组件时候的注册名称，已标签形式，在页面中引用
##获取所有的评论数据，显示到页面中
##实现点击加载更多评论功能
1.绑定点击事件，在事件中请求下一页数据
2.点击加载更多，pageIndex++，重新调用getComment()
3.为了防止新数据覆盖老数据，点击加载更多，应该调用数组中的concat方法
##发表评论
1.文本框做双向数据绑定
2.发表评论绑定事件
3.验证评论内容是否为空。
4.通过vue-resource发送一个请求，把评论提交给服务器
5.当发表评论成功后，重新刷新列表，查看最新的评论
 +如果调用getComment方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的
 评论获取不到，
 （思路：当评论成功后，在客户端，手动拼接一个最新的评论对象，然后调用数组的unshift方法，
 把最新的评论，追加到data中comment的开头）
 ##绘制图片列表页面
 1.制作顶部滑动条
 2.制作图片列表
 
 导入mui.js
 调用官方提供的方式去初始化
 mui('.mui-scroll-wrapper').scroll({
 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
 });
 
 4.导入初始化报错   因为mui.js用到了'caller', 'callee', and 'arguments'
 跟webpack打包好的bundle.js中默认是启动严格模式的。两者冲突
 解决方案：禁用webpack中的严格模式
 
 移除严格模式 插件：
  npm install babel-plugin-transform-remove-strict-mode
  
  5.刚进入photo.vue页面时，滑动条无法正常工作，时因为必须要等到DOM元素加载完毕，
  所以把初始化的代码放到mounted生命周期函数中
  6.当滚动条完毕后，发现tabbar无法正常工作，需要把tabbar按钮中的样式
  mui-tab-item 重新改下名字
  
  ##绘制商品列表页面
  ##尝试在手机上进行预览和测试
  要保证手机和开发项目的电脑处于同一个WIFI环境中
 