<template>
  <div>
    <ul class="nav_bar">
      <li v-for="(item,index) in nav" :key="index">
        <a :href="item.url">
          <img :src="item.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          url: "/",
          icon: require("@/assets/icon/home.png"),
          active_icon: require("@/assets/icon/home_active.png")
        },
        {
          url: "/category",
          icon: require("@/assets/icon/catgory.png"),
          active_icon: require("@/assets/icon/catgory_active.png")
        },
        {
          url: "/pin",
          icon: require("@/assets/icon/pin.png"),
          active_icon: require("@/assets/icon/pin_active.png")
        },
        {
          url: "/cart",
          icon: require("@/assets/icon/cart.png"),
          active_icon: require("@/assets/icon/cart.png")
        },
        {
          url: "/user",
          icon: require("@/assets/icon/user.png"),
          active_icon: require("@/assets/icon/user_active.png")
        }
      ]
    };
  }
};
</script>

<style lang="less">
.nav_bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  li {
    float: left;
    width: 20%;
  }
  a {
    text-align: center;
  }
  img {
    width: 1.2rem;
  }
}
</style>