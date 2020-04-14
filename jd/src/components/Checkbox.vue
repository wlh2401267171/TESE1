<template>
  <div class="checkbox">
    <div class="checkbox-select" :class="{checked:flag}" @click="select"></div>
    <div>{{flag}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      flag: true,
    };
  },
  methods:{
      select:function(){
          console.log(this)
          this.flag = !this.flag;
        //   if(this.flag){
        //       this.flag =false;
        //   }else{
        //       this.flag=true;
        //   }
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