<template>
    <div class="newsinfo">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="newscontent">{{newsInfo.content}}</p>
        <comment-box></comment-box>
    </div>
</template>

<script>
    //导入评论组件
    import comment from '../subcomponents/comments.vue'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                newsInfo:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
           getNewsInfo(){
               this.$http.get("./src/data/listInfo.json").then(res=>{
                   var data=res.body;
                   for (let i=0;i<data.length;i++) {
                       if (data[i].id==this.id){
                           this.newsInfo=data[i]
                       }

                   }

               })
           }
        },
        components:{
            //用来注册子组件
            'comment-box':comment
        }
    }
</script>

<style scoped>
   .newsinfo{

   }
    .title{
        line-height: 55px;
        color: #333333;
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .newscontent{
        font-size: 15px;
        color: #666;
        line-height: 1.5;
        padding: 0 10px;
    }
</style>