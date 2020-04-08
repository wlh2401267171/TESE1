<template>
  <div id="quick_nav">
    <ul class="quick_nav_content clear">
      <li class="left" v-for="(item,index) in nav" :key="index">
        <a :src="item.url">
          <img :src="item.image" />
          <p v-text="item.title"></p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  data() {
    return {
      nav: [
        { title: "京东超市", image: require("@/assets/icon/1.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/2.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/3.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/4.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/5.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/6.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/7.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/8.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/9.png"), url: "#" },
        { title: "京东超市", image: require("@/assets/icon/10.png"), url: "#" }
      ]
    };
  }
};
</script>

<style lang="less">
 .quick_nav_content{ 
	 text-align: center;
	 background-color: #FFFFFF;
	 padding-bottom: 0.2rem;
	 li{
		 padding-right: 0;
		 width: 20%;
	 }
	 img{
		 width: 0.8rem;
		 height: 0.8rem;
		 margin-top:0.2rem;
	 }
	 p{
		 margin: 0.12rem 0 0;
		 font-size: 0.24rem;
		 color: #666;

	 }
 }
</style>