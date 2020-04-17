<template>
  <div class="product">
    <topbar>
      <div class="nav-tab">
        <ul class="flex">
          <li
            class="flex-item" style="z-index:9999"
            :class="{active:index ==lwl}"
            @click="lwl=index;scrollTop(item.top)  "
            v-for="(item,index) in wlh"
            :key="index" 
          >
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </topbar>
    <div style="height:0.9rem" ref="product"></div>
    <swiper style="z-index:0"></swiper>

    <div style="height:1000px" ref="shangpin">
      <h1>商品</h1>
    </div>
    <div style="height:1000px" ref="pinjia">
      <h1>评价</h1>
    </div>
    <div style="height:1000px" ref="xiangqin">
      <h1>详情</h1>
    </div>
    <div style="height:1000px" ref="tuijian">
      <h1>推介</h1>
    </div>

    <btnbar></btnbar>
  </div>
</template>

<script>
import Topbar from "@/components/Tobar";
import btnbar from "@/components/btnbar";
import swiper from "@/components/SwiperHome";

export default {
  components: {
    Topbar,
    btnbar,
    swiper
  },
  data() {
    return {
   
      lwl: 0,
      wlh: [
        { title: "商品", top: 0 },
        { title: "评价", top: 0 },
        { title: "详情", top: 0 },
        { title: "推荐", top: 0 }
      ]
    };
  },
  methods:{
      getTopOffset(){
            this.wlh[0].top =this.$refs['shangpin'].offsetTop;
            this.wlh[1].top =this.$refs['pinjia'].offsetTop;
            this.wlh[2].top =this.$refs['xiangqin'].offsetTop;
            this.wlh[3].top =this.$refs['tuijian'].offsetTop;
            console.log(this.$refs['shangpin'].offsetTop+"ll")
      },
      scrollTop(val){
          var scrollTop=document.documentElement.scrollTop=val;
           window.pageYOffset=val;
           document.body.scrollTop=val;
           console.log(scrollTop+"wlh")
           
          //  添加滑动的动画
          var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          // 目标值
          let target = val -50;
          // 动画时长
          let duration =300;
          // 动画次数
          let count =20;
          // 时间片
          let  timeOut=duration/count;
          // 步进值
          let stop =(target - scrollTop)/count;

          let t=setInterval(()=>{
            document.documentElement.scrollTop +=stop;
            count --;
            if(count <=0){
              clearInterval(t)

            }
          },timeOut);
          document.documentElement.scrollTop = val-50;

      }
  },
  created(){
      window.addEventListener('scroll',()=>{
          var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            this.wlh.forEach((item,index)=>{
                if(Math.abs(item.top-scrollTop)<100){
                    this.lwl=index;
                    // console.log(item.top-scrollTop)
                    
                }else{

                }
            })
      })
  },
  mounted(){
      this.getTopOffset();
  }
};
</script>

<style lang="less">
.product {
  height: 1000px;

  .nav-tab {
    padding: 0 0.6rem;
    line-height: 0.9rem;
    text-align: center;
  }
  li.active span {
    color: #e4393c;
    padding-left: 0.26rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
    background-size: 0.16rem;
    background-repeat: no-repeat;
    background-position: left center;
  }
}
</style>