<template>
  <div class="emptycart">
    <div class="logintop">
      登录后可以同步购物车中的商品
      <div>登录</div>
    </div>
    <div class="loginbottom">
      <div></div>
      <p>登录后可同步购物车中的商品</p>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style lang='less'>
.emptycart {
    padding:0.7rem 0 0.3rem ;
  .logintop {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    div {
      display: inline-block;
      margin-left: 10px;
      width: 58px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background-image: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#f2270c),
        to(#ff4b2b)
      );
      background-image: -webkit-linear-gradient(right, #f2270c, #ff4b2b);
      background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
      box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
      border-radius: 15px;
    }
  }
}
.loginbottom {
  padding: 30px 0 35px;
  text-align: center;
  div {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url(//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png)
      no-repeat 50%;
    background-size: 1.8rem 1.8rem;
  }
  p {
    font-size: 16px;
    color: #333;
    line-height: 16px;
    margin-top: 15px;
  }
}
</style>