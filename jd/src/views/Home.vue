<template>
  <div class="home">
  	
  	
  	<SearchBar></SearchBar>
  	<Swiper></Swiper>
    
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Swiper from "@/components/SwiperHome";



export default {
  name: 'Home',
  components: {
  	SearchBar,
	Swiper,
    
  }
}
</script>
