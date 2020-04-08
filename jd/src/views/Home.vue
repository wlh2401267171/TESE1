<template>
  <div class="home">
  	
  	
  	<SearchBar></SearchBar>
  	<Swiper1></Swiper1>
    <quicknav></quicknav>
    <navbar></navbar>
  
    <div style="height:1000px"></div>
    
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Swiper1 from "@/components/SwiperHome";
import quicknav from "@/components/Quicknav";
import navbar from "@/components/Navbar";


export default {
  name: 'Home',
  components: {
  	SearchBar,
  Swiper1,
  quicknav,
  navbar
 
    
  }
}
</script>
