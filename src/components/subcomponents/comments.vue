<template>
    <div class="cmt_box">
        <h3>发表评论</h3>
        <hr>
      <textarea class="textarea" placeholder="请输入内容！" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">评论</mt-button>
        <div class="cmt_list">
            <div class="cmt_item" v-for="(item,index) in comment">
                <div class="cmt_title">
                    第{{index+1}}楼&nbsp;{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}
                </div>
                <div class="cmt_body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
       data(){
           return{
                  comment:[],
                  msg:'' //评论内容
           }
       },
        created(){
           this.getComment()
        },
        methods:{
           getComment(){
                this.$http.get('./src/data/comment.json').then(res=>{
                    console.log(res.body)
                    //原因：拼接数组
                    this.comment=this.comment.concat(res.body)
                })
            },
            postComment(){
               /*
               * post请求 this.$http.post（）
               * 参数1： url地址
               * 参数2：提交给服务器的数据对象 {}
               * 参数3：定义提交时候，表单中的数据的格式{emulateJSON:true}
               **/
               if (this.msg.trim().length===0){
                   return Toast('评论不能为空')
               } else {

                   this.comment.unshift({user_name:'匿名用户',add_time:this.getdate(),content:this.msg});
                   this.msg=''
               }
            },
            getdate(){
               var date=new Date();
               var y=date.getFullYear();
               var m=date.getMonth()+1;
               var d=date.getDate();
               var h=date.getHours();
               var m=date.getMinutes();
               var s=date.getSeconds();
               return y+"-"+m+"-"+d+"-"+(h<10?("0"+h):h)+":"+(m<10?("0"+m):m)+":"+(s<10?("0"+s):s)
            }
        }
    }
</script>

<style scoped>
    .cmt_box{
        margin: 0 10px;
    }
   .textarea{

       box-sizing: border-box;
   }
    .cmt_list{

    }
    .cmt_title{
        background: #eee;
        line-height: 2;
        padding: 0 10px;
    }
    .cmt_body{
        line-height: 2;
    }
</style>