<template>
    <div>
        <mt-swipe :auto="4000"  id="lunbo">
            <mt-swipe-item v-for="(item,index) in lunboList" :key="item">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newlist">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photo">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodsList">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/icon1.jpg">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               lunboList:[],
               lunboH:''
           }
       },
        created(){
           this.getlunbotu();

        },

        methods:{
          // http://vue.studyit.io
           getlunbotu(){
              this.$http.get('/src/data/lunbo.json').then(res=>{
                  console.log(res)
                  var data=res.body;
                  var dataList=[]
                 for (var i=0;i<data.length;i++){
                       dataList[i]=data[i].url;
                 }
                 this.lunboList=dataList
              })
           }
        },

    }
</script>

<style scoped>
    #lunbo{
        height: 220px;}
    .mint-swipe-item img{
        height: 100%;width: 100%}
    .mui-grid-view.mui-grid-9{
        background: #fff;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
        color: #666;
		
    }
</style>