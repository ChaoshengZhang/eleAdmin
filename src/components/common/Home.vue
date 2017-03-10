<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div id="main">
            <div class="main-wrapper">
                <transition name="fold">
                    <router-view></router-view>
                </transition>
                <v-footer></v-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import vHeader from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vFooter from './footer.vue';

    export  default({
        components:{
            vHeader,vSidebar,vFooter
        }
    })

</script>