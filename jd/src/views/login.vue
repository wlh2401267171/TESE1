<template>
  <div id="login">
    <btnbar>
      <div class="title">京东登录</div>
    </btnbar>
    <div class="login-from-wrap">
      <!-- 用户名 -->
      <div class="input-container">
        <input class="user-name" value="" v-model='wlh' type="text" placeholder="请输入用户名" />
        <i class="icon icon-clear" v-show="wlh != ''" @click="wlh=''"></i>
      </div>
      <!-- 密码 -->
      <div class="input-container">
        <input class="password flex-item" v-model='lwl' :type="type" placeholder="请输入用户密码" />
        <i class="icon icon-clear" v-show="lwl != ''" @click="lwl=''"></i>
        <i class="icon icon-eye" :class="{open:type != 'password'}" @click="type=(type=='password'?'text':'password')"></i>

        <button class="findpwd">获取验证码</button>
      </div>
      
      <div  class='notice' v-text="msg"></div>
      <button class="login-btn" :class="{active:wlh !=''&& lwl !=''}" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import btnbar from "@/components/Tobar";
export default {
  components: {
    btnbar
  },
  data() {
    return {
      wlh: '',
      lwl:'',
      type:'password',
      msg:'',
    }
  },
methods:{
    login(){
        if(this.wlh == 'admin' && this.lwl == '123456'){
            
            this.$store.commit('setlogin',true);

            this.$router.push('/user/')
        }else{
            this.msg='用户名或者密码错误';
        }
    }
}
};
</script>

<style lang='less'>
#login {
  .login-from-wrap {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    .input-container {
      position: relative;
      margin-top: 0.4rem;
      padding: 0.2rem 0;
      height: 0.6rem;
      border-bottom: 1px solid #efefef;
      font-size: 0.34rem;
      position: relative;
      input {
        width: 100%;
        height: 0.6rem;
        border: none;
        outline: none;
        color: #222;
        box-sizing: border-box;
        &.user-name {
          padding-right: 0.6rem;
          & + .icon-clear {
            right: 0.06rem;
          }
        }
        &.password {
          padding-right: 3rem;
          & + .icon-clear {
            right: 2.5rem;
          }
        }
      }
      .icon {
        position: absolute;
        top: 0.26rem;
        right: 0;
        width: 0.48rem;
        height: 0.48rem;
        background-size: 100% auto;
      }
      .icon-clear {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
      }
      .icon-eye {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==);
        right: 1.8rem;
        &.open {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5UlEQVR4Ae1YJXQsQRD8zOYzmTD52Hgdjg2zDvp3571J3HkXZloKg40KM1NXOPMyO8fY9V4f7HZX1zC8YDAYDAaDEQ2YmJj4q+t6iaZp7WS9ZItku7Db3714Bx/4hoXopaWl9ySmikwjXND3pTt266shFhxBFz4zM/OOarKOhCxDkC8GDnCBMyjiKWE6mYnk/jRwgjvQ4iso2YFExCn6OX03Uo1m0e8kqtUvMPzGM7y79TmVcBwgR6DEN0tqbpfMOTU19dtdLvgiBrESzmZ/zzCtkkRtVMPfvOVFLDgkrdHqF/HU9DnPkG/T80K891OOInCKeZDbJ2LTNP8T0bpQ65uGYWTKYi4vL1+STxn5jtytA7e/y/BOFgdOcAuFWIcGX7qOSyA8RCK7xYxEdNrMNJ3wsSsEcghxLq/EW5YVTwnPBbJqu5qXihcKYdcSyCH4n0OLN7OOUyAaV/iXeTDnlym4xgV/pzfdp18gyVf4j7hbAPgqCpAv+Pd7U4DVxySqeV42p8vWDtU6IcSsRlIBsD78EQsQBV0oCgZxFEyjEbCQkc+RuJBF/lYiAjZzhbLNHG+nFQca2A69c3hxoHGoDjR8pJT014xAHerBHcz7oHp/XauAC9cq0X+xxVeLDAaDwWAw/IsraH8effh8nP4AAAAASUVORK5CYII=);
        }
      }

      .findpwd {
        position: absolute;
        height: 0.46rem;
        line-height: 0.46rem;
        right: 0;
        top: 0.25rem;
        background-color: #fff;
        color: #222;
        font-size: 0.28rem;
        border: 0;
        outline: 0;
        border-radius: 2px;
        text-align: center;
        padding-left: 0.32rem;
        border-left: 1px solid #ccc;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
    .notice {
      font-size: 0.28rem;
      line-height: 0.6rem;
      color: #f23030;
      min-height: 0.3rem;
      text-align: left;
    }

    .login-btn {
      width: 100%;
      height: 1rem;

      border-radius: 0.5rem;
      background-color: #efefef;
      font-size: 0.32rem;
      outline: none;
      border: none;
      color: #fff;
      background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);

      &.active {
        background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18);
      }
    }
  }
}
</style>