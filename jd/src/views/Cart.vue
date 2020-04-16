<template>
  <div class="cart">
    <topbar>
      <div class="title">我的购物车</div>
    </topbar>
    <emptycart v-if="product.length==0"></emptycart>

    <!-- <h1>2</h1> -->

    <div class="product-list">
      <cartproduct v-for="(item,index) in product" :count='item.count' :price='item.price' :image="item.image" :id="item.id" :key='index' :title="item.title" v-model="selected" @change="change"></cartproduct>
      {{selected}}
    </div>
  

    <totalsum v-model="all" :sum="sum" :count="count" v-show="product.length>0"></totalsum>
    <navbar></navbar>
  </div>
</template>
    
<script>
import navbar from "@/components/Navbar";
import topbar from "@/components/Tobar";
import totalsum from "@/components/totalsum";
import cartproduct from "@/components/cartproduct";
import emptycart from "@/components/emptycart";

export default {
  components: {
    navbar,
    topbar,
    totalsum,
    cartproduct,
    emptycart
  },
  data() {
    return {
      all: false,
      selected: [],
      product:[
        {id:1,image:'https://img10.360buyimg.com/mobilecms/s150x150_jfs/t1/48223/8/759/244277/5ce73eceE351d9066/99af3cd34c0f6471.jpg',title:'御泥坊面膜',count:1,price:229.9},
        {id:2,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/75265/25/7292/125202/5d57a58bEf8b62451/19f4ffabbf224bf6.jpg!q70.dpg.webp',title:'悟空',count:1,price:290.888},
        {id:3,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/89921/13/18833/371795/5e97ae1bE853208e1/09520df05433579a.jpg!q70.dpg.webp',title:'御泥坊面膜护肤',count:1,price:146},
        {id:4,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/106104/17/18618/131473/5e950e60Eee751ed4/2ef6bc5544998e44.jpg!q70.dpg.webp',title:'烟台红富士',count:1,price:44.98},
        {id:5,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/102914/20/16983/243698/5e80625aE893c6000/ff9b94aa66441f14.jpg!q70.dpg.webp',title:'微晶面膜',count:1,price:334.9},
        {id:6,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/99083/40/8208/182264/5e031645Edb41f53d/f8e75b084e3753bf.jpg!q70.dpg.webp',title:'安踏鞋子',count:1,price:999.9},
        {id:7,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/7720/36/12435/559596/5c362a52Edec490cb/733e5b75736558bf.png.webp',title:'自能手机',count:1,price:3256},
        {id:8,image:'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/104551/38/18366/370649/5e944185E1df1d55c/aefbc72232c0c0f2.jpg!q70.dpg.webp',title:'手表',count:1,price:22124.9},

      ]
    }
  },
  methods:{
    // 数量的改变 id:checekbox    item.id:product中的id
    change(id,count){
      this.product.forEach((item,index) =>{
        if(item.id == id){
          this.product[index].count=count;
          this.product[index].sum=count*item.price;

        }
      })
    },

  },
  computed:{
    count(){
      let n=0;
      this.product.forEach((item,index)=>{
        if(this.selected.indexOf(item.id)>-1){
          n+=item.count;
        }
      });
      return n;
    },
    sum(){
      let m=0
      this.product.forEach((item,index)=>{
        if(this.selected.indexOf(item.id)>-1){
          m+=item.count*item.price;
        }
      });
      return m;
    }
  },
  watch:{
    selected(val){
      console.log(val)
      if(val.length ==this.product.length){
        this.all= true;
      }else{
        this.all=false;
      }
    },
    all(val){
      if(val){
        this.product.forEach(item=>{
            this.selected.push(item.id) ; 
        })
      }else if(this.selected.length == this.product.length){
          this.selected=[];
      }
     
    }
  }
};
</script>
<style lang="less" >
.cart {
  height: 1000px;
  .product-list{
    margin-top:1.2rem;
    margin-bottom:2.5rem;
  }
}
</style>