<template>
    <div id = "vuex">
        <b-loading :active.sync="getLoadingData"></b-loading>
        <ul>
            <img v-for="link in getData" :src="link.url">
               
        </ul>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('imagineModule', ['getData', 'getLoadingData'])
    },
    methods: {
     
        ...mapActions('imagineModule', ['requestData'])
    },
  
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>