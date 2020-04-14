<template>
    <div class="product_list clear">
        <ul >
            <li v-for="(item,index) in product" :key='index'>
                <router-link :to="'/product/'+item.id">
                <a class="product" :src='item.url'>
                    <img :src="item.imag"/>
                    <p v-text="item.title"></p>
                    <div>
                    <p class="left" style="color:red" v-text="item.price"></p>
                    <p class="right" v-text="item.pin"></p>
                    </div>
                </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            product:[
                {id:1,url:'#', imag:require("@/assets/images/product_1.jpg"),title:'产品1',price:'￥115',pin:'22人拼购'},
                {id:2,url:'#', imag:require("@/assets/images/product_2.jpg"),title:'产品2',price:'￥115',pin:'20人拼购'},
                {id:3,url:'#', imag:require('@/assets/images/product_3.jpg'),title:'产品3',price:'￥115',pin:'202人拼购'},
                {id:4,url:'#', imag:require('@/assets/images/product_4.jpg'),title:'产品4',price:'￥115',pin:'203人拼购'},
                {id:5,url:'#', imag:require("@/assets/images/product_1.jpg"),title:'产品5',price:'￥115',pin:'22人拼购'},
                {id:6,url:'#', imag:require("@/assets/images/product_2.jpg"),title:'产品6',price:'￥115',pin:'20人拼购'},
                {id:7,url:'#', imag:require('@/assets/images/product_3.jpg'),title:'产品7',price:'￥115',pin:'202人拼购'},
                {id:8,url:'#', imag:require('@/assets/images/product_4.jpg'),title:'产品8',price:'￥115',pin:'203人拼购'},
                {id:9,url:'#', imag:require("@/assets/images/product_1.jpg"),title:'产品9',price:'￥115',pin:'22人拼购'},
                {id:10,url:'#', imag:require("@/assets/images/product_2.jpg"),title:'产品10',price:'￥115',pin:'20人拼购'},
                {id:11,url:'#', imag:require('@/assets/images/product_3.jpg'),title:'产品11',price:'￥115',pin:'202人拼购'},
                {id:12,url:'#', imag:require('@/assets/images/product_4.jpg'),title:'产品12',price:'￥115',pin:'203人拼购'}
                ]
        }
    }
}
</script>

<style lang="less">
 .product_list{
     
    //  background-color: blue;
     ul{
          padding:0 0.2rem;
     li{
         width: 50%;
         float: left;
         box-sizing: border-box;
         padding: 0 2px 4px 0;
         &:nth-child(2n){
             padding:0 0 4px 2px;
         }
         .product{
           
            width:100%;
            // background-color: red;
         }
         a{
             width: 100%;
             img{
                 width: 100%;
             }
         }

     }
     }
 }
</style>