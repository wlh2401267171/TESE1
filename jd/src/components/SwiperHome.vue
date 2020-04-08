
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in images" :key="index">
        <img :src="item" />
      </div>
    </div>
    <!-- Add Scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      swiper: null,
      images: [
        require("@/assets/images/1.jpg"),
        require("@/assets/images/2.jpg"),
        require("@/assets/images/3.jpg"),
        require("@/assets/images/4.jpg")
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
		loop:true,
      scrollbar: {
        el: ".swiper-scrollbar",
		hide: true,
		autoplay:true,
      }
    });
  }
};
</script>
<style lang="less">
.swiper-container{
	width: 100%;
	img{
		width: 100%;
	}
}



</style>
