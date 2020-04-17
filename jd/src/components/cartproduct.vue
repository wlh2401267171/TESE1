<template>
  <div class="cartproduct flex">
    <div class="checkbox">
      <checkbox :value='id' :val='selected' @input="(arr)=>{$emit('input',arr)}"></checkbox>
    </div>

    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-information flex-item">
      <div class="product-title" v-text="title"></div>
      <div class="product-option" v-text="sku"></div>
      <div>
        <div class="product-count clear">
          <div class="price left">
            ￥
            <span v-text="price1">{{price1}}</span>
            .{{price2}}
          </div>
          <div class="count right">
            <span @click="reduce()">-</span>
            <span v-text='n'></span>
            <span @click="add()">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/Checkbox";
export default {
  components: {
    checkbox
  },
  data() {
    return {
        n:0,
        selected:[]
    };
  },
  methods:{
      reduce(){
          this.n>0?this.n--:0;
          this.$emit("change",this.id,this.n)
      },
      add(){
          this.n++;
          this.$emit("change",this.id,this.n)
      }
    
  },
    created(){
    this.n=this.count;
    this.selected = this.value;

  },
 props:{
     value:{
         type:Array,
         default:function(){
             return []
         }
     },
     id:{
         type:Number,
         required:true
     },
     image:{
         type:String,
         default: require('@/assets/wlh/default.png')
     },
     title:{
         type:String,
         default:'商品标题'
     },
     sku:{
         type:String,
         default:'套餐1:###'
     },
     price:{
         type:Number,
         default:100.1  
     },
     count:{
         type:Number,
         default:1
     }
 },
  computed: {
    price1() {
        return  Math.floor(this.price);
    },
    price2() {
    var n = Math.floor((this.price * 100) % 100);
    return n < 10 ? "0" + n : n;

    }
  },
		watch: {
			value(val) {
				this.selected = val;
			}
		},
  
};
</script>

<style lang='less'>
.cartproduct {
  margin: 0.3rem 0;
  padding: 0.1rem 0 0.3rem;
  .checkbox {
    margin-top: 0.2rem;
    width: 1rem;
    height: 100%;
  }
  .product-image {
    img {
      width: 1.9rem;
      height: 1.5rem;
      box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.05);
      border-radius: 0.12rem;
    }
  }
  .product-information {
    padding-left: 0.2rem;
    .product-title {
      font-size: 0.28rem;
      padding-right: 0.2rem;
      margin-bottom: 0.06rem;
      word-break: break-all;
      position: relative;
    }
    .product-option {
      position: relative;
      background: #f7f7f7;
      padding: 0 15px 0 5px;
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      color: #666;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      border-radius: 2px;
    }
    .product-count {
      .price {
        font-family: JDZH-Regular;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        line-height: 16px;
        color: #f2270c;
        font-size: 10px;
      }
      .count {
        span {
          display: inline-block;
          width: 0.6rem;
          height: 0.6rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.38rem;
        }
      }
    }
  }
}
</style>