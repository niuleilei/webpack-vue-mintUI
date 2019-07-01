<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.content}}</p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            this.list()
        },
        methods:{
            list(){
                this.$http.get('./src/data/newsList.json',{name:'niu'}).then(res=>{

                    this.newsList=res.body
                })
            }
        }

    }
</script>

<style scoped>
.mui-ellipsis{color:#0062cc}
</style>