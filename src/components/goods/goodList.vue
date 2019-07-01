<template>
    <div class="goodlist">
        <div class="goodlist_box" v-for="item in list" :key="item.id">
            <img :src="item.url" class="box_img">
            <p class="box_title">{{item.title}}</p>
            <div class="box_bot">
                <p class="bot_price">￥ {{item.price | fixed}}</p>
                <p class="status">热卖中...</p>
                <div class="btn_box">
                    <mt-button type="primary" size="large" @click="addToCar">加入购物车</mt-button>


                </div>
            </div>
        </div>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <span ref="ball" class="ball" v-show="ballFlag"></span>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                ballFlag:false
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.$http.get('./src/data/goodslist.json').then(res=>{

                    this.list=res.body
                })
            },
            // goInfo(id){
            //     //第二种跳转
            //     // this.$router.push("/home/goodInfo/"+id)
            // }
            addToCar(){
                this.ballFlag= !this.ballFlag;


            },
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                var ballCoord=this.$refs.ball.getBoundingClientRect();
                //获取购物车的位置
                var badge=document.getElementById("badge").getBoundingClientRect()

                var x=badge.left-ballCoord.left;
                var y=badge.top-ballCoord.top;
                console.log(this.$refs)
                el.style.transform=`translate(${x}px,${y}px)`
                el.style.transition='all 0.3s ease';
                el.style.opacity='0.2';
                //获取小球的在页面中的位置

                done()
            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag;

            }
        },
        filters:{
            fixed(value){
                 return value.toFixed(2)
            }
        }
    }
</script>

<style scoped>
   .goodlist{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       padding: 6px;

   }
    .goodlist_box{
        width: 49%;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #cccccc;
        margin: 3px 0;
       display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .box_img{
        display: block;
        margin: auto;
        margin-top: 30px;

    }
    .box_title{
        padding: 0 10px;
        margin-top: 20px;
        color: #333;
        font-size: 14px;
        word-wrap:break-word
    }
    .box_bot{
        background: #eee;
       padding: 10px;
    }
    .bot_price{
        color: red;
    }
    .status{
        color: #666;
        margin: 0;
    }
    .btn_box{
        position: relative;
    }
    .btn_box button{
        overflow: auto;
    }
    .ball{
        height:20px;width: 20px;
        background: red;
        position: absolute;
        left: 50px;
        top: 50px;
        border-radius: 50%;
        z-index: 999;
    }
</style>