<template>
<div>
    <topbar><div class="title">我的购物车</div></topbar>
 

   <totalsum></totalsum>
    <navbar></navbar>
</div>
</template>
    
<script>
import navbar from "@/components/Navbar";
import topbar from "@/components/Tobar";
import totalsum from "@/components/totalsum";

export default {
    components:{
        navbar,
        topbar,
        totalsum,
    
    }
    
}
</script>
<style lang="less" >

</style>