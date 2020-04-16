<template>
  <div class="checkbox">
    <div class="checkbox-select" :class="{checked:flag}" @click="select"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      flag: false
    };
  },
  // 父组件使用 prop 传递数据给子组件。子组件通过自定义事件与父组件通信。(一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件)
  model: {
			prop: "val",
			event: 'input'
		},
  props: {
		val: {
		type: [Array, Boolean],
		required: true
    },
    
		value: {
		default: ""
    }
  },
  methods: {
    select: function() {
      this.flag = !this.flag;

      if (typeof this.val == "boolean") {
        this.$emit("input", this.flag);
      } else {
        if (this.flag) {
          this.arr.push(this.value);
         
        } else {
          var that = this;
          var index = 0;
          this.arr.forEach(function(item, inx) {
            if (item == that.value) {
              index = inx;
            }
          });
          this.arr.splice(index, 1);
        }

        this.$emit("input", this.arr);
      }


    }
  },
  watch: {
    val: function(val) {
      if (typeof val == "boolean") {
        this.flag = val;
      } else {
        this.arr = val;
        var that = this;
        var a = false;
        this.arr.forEach(function(item, index) {
          if (item == that.value) {
            a = true;
          }
        });
        this.flag = a;
      }
    }
  },
  created: function() {
    this.arr = this.val;
    if (typeof this.val == "boolean") {
      this.flag = this.val;
    } else {
      var that = this;
      this.arr.forEach(function(item, index) {
        if (item == that.value) {
          that.flag = true;
        }
      });
    }
  }
};
</script>

<style lang='less'>
.checkbox {
  .checkbox-select {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    padding-left: 0.5rem;
    line-height: inherit;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTJqampmZmZmZmZubm5ubm6KiopeXl5mZmZmZmaKiopmZmVmXLrgAAAALdFJOUwBD8KiAagslwtYWexMYygAAAOVJREFUKM9jYICAUotJms3hDMiAy3M3GExZgBBjc9qtHFiWLmq0WyUBLii02xDCEN6tCBNj2d0IY0rsdoBqtt6KMCl6M8QA5k0CCEFGbQMw7a2O7JCiLWC53QLIghBu0lYUJzNEq4F0N6AKcgD1c2kLoAoyblrAwLKZAQ1YOzBwbkQXlJ7AUK2ALsi0nSHaAF2QeSuDdQC6IOtmhm4BdEHGHQyzC9AF2XcyaCegC7Jtwi6IVTtWi7A6CavjsXoTa4BgDTqsgYw1OrBHHNYoxpoYsCcbrAkMa1LEnmixJ2+sGQE9ywAARBBNCX4Tud8AAAAASUVORK5CYII=);
    background-size: 0.4rem 0.4rem;
    background-repeat: no-repeat;
    background-position: left center;
    cursor: pointer;
  }

  .checked {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0wOxAAAAAElFTkSuQmCC);
  }
}
</style>