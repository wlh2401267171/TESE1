<template>
  <div class="wrap1 left">
    <aside
      class="aside1"
      ref="aside"
      @touchstart="ontouchstart"
      @touchmove="ontouchmove"
      @touchend="ontouchend"
      @touchcancel="ontouchcancel"
    >
      <ul :style="{top:tmp+'px'}" :class="{transition:transition}" ref="scroll">
        <li v-for="(item,index) in hui" @click="onClick(index)" :key="index">
          <a href="#">
            <img :src="item.tupian" /><br/>
            <span v-text="item.title1"></span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      tmp: 0,
      offsetTop: 0,
      limitTop: 0,
      startY: 0,
      transition: false,
      hui: [
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条1", tupian: require("@/assets/wlh/1.jpg") },
        { title1: "面条2", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "面条3", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "面条4", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "大米1", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "大米2", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "大米3", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "大米4", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "大米5", tupian: require("@/assets/wlh/2.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
        { title1: "食用油", tupian: require("@/assets/wlh/3.jpg") },
		{ title1: "食用油", tupian: require("@/assets/wlh/2.jpg") },
		 { title1: "大米3", tupian: require("@/assets/wlh/2.jpg") },
		  { title1: "大米3", tupian: require("@/assets/wlh/2.jpg") },
      ]
    };
  },
  methods: {
    ontouchstart(e) {
      // 获取开始的位置
      this.startY = e.changedTouches[0].clientY;
      this.transition = false;
    },
    ontouchmove(e) {
      let y = e.changedTouches[0].clientY;
      // 计算滑动的距离
      this.tmp = this.offsetTop + y - this.startY;
      // 限定滑动的长度（150）
      this.tmp = this.tmp > 150 ? 150 : this.tmp;
      this.tmp = this.tmp < this.limitTop ? this.limitTop : this.tmp;
    },
    ontouchend(e) {
      // 返回顶部
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    ontouchcancel(e) {
      // 返回顶部
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    onClick(index) {
      this.navIndex = index;
      // 根据 索引值计算滚动的距离
      this.tmp = this.$refs["scroll"].offsetHeight * (this.navIndex / 100) * -1;

      // 越界处理
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    }
  },

  mounted() {
    // 计算滑动到底部的限定值
    this.limitTop =
      this.$refs["aside"].offsetHeight -
      this.$refs["scroll"].offsetHeight -
      150;
  }
};
</script>

<style lang="less">
.wrap1 {
  height: 100%;
  width: 100%;
  background-color: white;
  .aside1 {
    height: 100%;
    width: 100%;
    background-color: #f8f8f8;
    overflow: hidden;
    position: relative;
    ul {
      position: absolute;
      top: 0;
      left: 0;

      text-align: center;

      li {
		width: 32.8%;
        float: left;
        a {
          display: block;
          text-decoration: none;
          display: block;
          border: none;
          margin: 0.4rem 0.4rem 0.2rem 0.4rem;

          img {
            width: 1rem;
            height: 1rem;
          }
          span {
            margin-top: 0.1rem;
            text-align: center;
            font-size: 0.38rem;
            color: #666;
          }
        }
      }
    }
  }
}
</style>