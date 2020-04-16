<template>
  <div class="totalsum flex">
    <div class="select-all">
      <checkbox :val="all" @input='onChange'></checkbox>全选
    </div>

    <div class="sum flex-item">
      总计
      <span>￥{{sum}}</span>
    </div>

    <div class="pay flex-item" :class="{active:count>0}">
      去结算
      <strong>{{count}}件</strong>
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/Checkbox";

export default {
      components: {
    checkbox
  },
    data(){
        return{
            all:false,
        }
    },
  props:{
      sum:{
          type:Number ,
          default:0
      },
      count:{
          type:Number ,
          default:0
      },
      			value:{
				type:Boolean,
				default:false
			}
  },
  methods:{
      onChange(val){
          this.all=val;
          this.$emit('input',val)
      }
  },
  created(){
      this.all = this.value;
  },
  watch:{
      value(val){
          this.all = val;
      }
  }
};
</script>

<style lang='less'>
.totalsum {
  position: fixed;
  bottom: 0.89rem;
  left: 0;
  width: 100%;
  background-color: #e6e6e6;
  height: 1.2rem;
  .select-all {
    width: 0.8rem;
    padding-top: 0.23rem;
    font-size: 0.2rem;
    height: 0.3rem;
    color: #999;
  }
  .sum {
    font-size: 0.32rem;
    text-align: right;
    line-height: 1rem;
    font-weight: 700;
    padding-right: 0.2rem;
    font-family: JDZH-Regular;
    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 1em;
      font-family: JDZH-Regular;
          color: #f2270c;
    }
  }
  .pay {
     margin: 5px 5px 0 10px;
    font-weight: 700;
    display: block;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border-radius: 20px;
       -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #fff;
    &.active{
       
              background-color: #f2270c;
    }
    strong{
            line-height: 40px;
    text-align: center;
    color: #fff;
    }
  }
}
</style>