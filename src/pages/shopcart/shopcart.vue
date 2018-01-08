<template>
  <div class="shop">
    <div class="shop_header">
      <div>
       <!-- <div>-->
          <router-link to="/home" class="go-back"></router-link>
        <!--</div>-->
        <span class="topbar-title">购物车</span>
        <span class="J_bur" @click="showNav"></span>
      </div>
      <transition name="fade">
      <div class="headernav" ref="nav" v-show="flag">
        <ul>
          <li class="home">
            <span class="footericon"></span>
          </li>
          <li class="classify">
            <span class="footericon"></span>
          </li>
          <li class="shopcart">
            <span class="footericon"></span>
          </li>
          <li class="myepet">
            <span class="footericon"></span>
          </li>
        </ul>
      </div>
      </transition>
    </div>
    <div class="m-emptycoupon">
      <span class="u-emtcoupon"></span>
      <p class="emttip">购物车是空的</p>
      <div class="emt">
        <router-link to="/home">去逛逛</router-link>
        <a href="javascript:;" class="">我的收藏</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        flag: false
      }
    },
    methods: {
      showNav () {
        if(!this.flag){
          this.flag = true;
        }else {
          this.flag=false
        }

      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shop
    background-color: #f6f5f4;
    width: 100%;
    height: 100%;
  .shop_header
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #999;
    .go-back
      float: left;
      margin-top: 16px;
      margin-left: 20px;
      width: 20px;
      height: 20px;
      background: url("../../common/images/personal-bico1.png") no-repeat;
      background-size: 9px 17px;
    .topbar-title
      vertical-align: middle;
    .J_bur
      vertical-align: middle;
      background-image: url("../../common/images/imgtk-new.png");
      float: right;
      width: 20px;
      height: 20px;
      background-size: 20px;
      margin-top: 20px;
      margin-right: 20px;
    .headernav
      height 45px
      line-height 45px
      width 100%
      border-top 1px solid #e7e7e7
      background #fff
      li
        float: left;
        width: 25%;
        height: 55px
        text-align center
        span
          display inline-block
          background: url(../../common/images/footer.png) no-repeat;
          background-size: 234px 163px;
          margin: 0 auto;
          height: 40px;
          width: 42px;
          margin-top: 2px;
          a
            display block
            height 100%
      .classify
        span
          background-position: -85px -41px;
      .shopcart
        span
          background-position: -85px -81px
      .myepet
        span
          background-position: -85px -122px
    /*.fade-enter-active, .fade-leave-active {
          transition: opacity 1s;
        }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }*/
  .m-emptycoupon {
    height: 298px;
    width: 100%;
    background-color: #fff;
    text-align: center;
    p {
      color: #dbdbdd;
      font-size: 16px;
    }
    .u-emtcoupon {
      display: inline-block;
      background: url("../../common/images/cart-ico.png");
      background-position: 0 -160px;
      background-origin: padding-box;
      background-size: 105px;
      width: 100px;
      height: 100px;
      margin: 50px 0 20px 0;
    }
    .emt {
      margin-top: 18px;
      a {
        display: inline-block;
        border-radius: 5px;
        border: 1px solid #999;
        height: 40px;
        line-height: 40px;
        width: 100px;
        color: #999;
      }
    }
  }
</style>

