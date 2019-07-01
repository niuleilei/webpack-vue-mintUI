<template>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id==0 ? 'mui-active': '']" v-for="item in titleList" :key="item.id">
                    {{item.name}}
                </a>

            </div>
        </div>
        <!--  图片列表，懒加载  -->
        <ul class="img-ul">
            <li v-for="item in photoImg">
                <img v-lazy="item.url">
            </li>
        </ul>

    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {

        data(){
          return{
              titleList:{},
              photoImg:{}
          }
        },
        created(){
            this.getPhotoTop();
            this.getPhotoImg()
        },
        mounted() {
            //初始化顶部滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getPhotoTop(){
                this.$http.get('./src/data/phototop.json').then(res=>{
                     this.titleList=res.body
                })
            },
            getPhotoImg(){
                this.$http.get('./src/data/photoImg.json').then(res=>{
                    console.log(res.body)
                    this.photoImg=res.body
                })
            }
        }

    }
</script>

<style scoped>
    .img-ul ,.img-ul li{
        padding: 0;
        list-style: none;
        margin: 0;
    }
    .img-ul li{
        background: #ccc;
        text-align: center;
        margin: 10px;
        box-shadow: 0 0 8px #ccc;
    }
    .img-ul li img{
        width: 100%;
        vertical-align: middle;
    }

    .img-ul li img[lazy=loading] {
      width: 40px;
      height: 200px;
      margin: auto;
  }
</style>