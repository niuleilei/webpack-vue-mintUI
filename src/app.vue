<template>
    <div class="mint_container">
        <!--  顶部区域-->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!--  内容区域-->
        <transition>
            <router-view></router-view>
        </transition>
        <!--  底部区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-nll" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-nll" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-nll" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart" id="badge"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-nll" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "app.vue"
    }
</script>

<style scoped>
    .mint_container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,.v-leave-active{
        transition: 0.5s;
    }
    .mui-bar{
        box-shadow: 0 0 6px #ccc;
    }
/*    由于photo头部滑动模块问题，重构tabbar底部样式*/
    .mui-bar-tab .mui-tab-item-nll.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-nll {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-nll .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-nll .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>