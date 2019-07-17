<template>
    <div>
       <input v-model="$store.state.count">
      <button @click="add()">++</button>
        <button @click="remove()">--</button>
        <h3>{{$store.getters.opt}}</h3>
    </div>
</template>

<script>

    export default {
        data(){
            return{

            }
        },
       methods:{
            add(){
                this.$store.commit("aaa")
            },
           remove(){
               this.$store.commit("bbb",3)
           }
       }
    }

</script>

<style scoped>

</style>