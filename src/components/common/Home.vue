<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div id="main">
            <div class="main-wrapper">
                <transition name="fold">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #main{
        position: absolute;
        left:200px;
        top:50px;
        background-color: #fff;
        right:0;
        bottom:0;
        overflow: hidden;
    }
    .main-wrapper{
        margin: 20px;
        overflow: auto;
    }
</style>
<script>
    import vHeader from './Header.vue';
    import vSidebar from './Sidebar.vue'

    export  default({
        components:{
            vHeader,vSidebar
        }
    })

</script>