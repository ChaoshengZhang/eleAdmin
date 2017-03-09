<template>
    <top-bar></top-bar>
    <side-bar></side-bar>
</template>
<style scoped>

</style>
<script>

    export  default({
        data(){
            return {
                num1:1
            }
        },
        methods:{
            handleChange:function(value){
                console.log(value)
            }
        }
    })

</script>