<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="less">
   html{
   	font-size: calc(100vw/7.5);
   }
   body{
   	 /*background-color: #f6f6f6;
   	 font-size: 0.28rem;
   	 color:#666;*/
	   	margin: 0 auto;
	    min-width: 6.4rem;
	    max-width: 10.8rem;
	    background: #fff;
	    font-size: 0.28rem;
	    font-family: -apple-system,Helvetica,sans-serif;
	    line-height: 1.5;
	    color: #666;
	    -webkit-text-size-adjust: 100%!important;
	    padding-bottom: env(safe-area-inset-bottom);
   	
   }
   .left{
   	float: left;
   }
   .right{
   	float: right;
   }
   .flex{
   	display:flex;
   }
   .clear{
   	display: block;
   	clear: none;
   }
   .flex-item{
   	flex:1;
   }
   ul{
	   padding :0;
	   margin: 0;
   }
   li{
	   list-style: none;
	   padding-right: 0;
   }
   
</style>
