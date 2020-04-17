<template>
<div>
   <h1>我的登录状态:{{$store.state.login}}</h1>
    <navbar></navbar>
</div>
</template>
    
<script>
import navbar from "@/components/Navbar";
export default {
    components:{
        navbar
    }
    
}
</script>
<style lang="less" >

</style>