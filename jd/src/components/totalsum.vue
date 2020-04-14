<template>
<div class="totalsum flex">
    <div class="select-all">
        <checkbox></checkbox>
       全选
    </div>

    <div class='sum flex-item'></div>

    <div class="pay flex-item"></div>




</div>
    
</template>

<script>
import checkbox from  "@/components/Checkbox";


export default {
    components:{
        checkbox,

    },
    
}
</script>

<style lang='less'>
.totalsum{
    position: fixed;
    bottom:1.5rem;
    left: 0;
    width: 100%;
    background-color:#E6E6E6;
    height: 1.2rem;

}

</style>