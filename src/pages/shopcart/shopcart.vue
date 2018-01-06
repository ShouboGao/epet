<template>
  <div class="shop">
    <div class="shop_header">
      <div></div>
      <span class="topbar-title">购物车</span>
      <span class="J_bur"></span>
    </div>
    <div class="m-emptycoupon">
      <span class="u-emtcoupon"></span>
      <p class="emttip">购物车是空的</p>
      <div class="emt">
        <router-link to="./home">去逛逛</router-link>
        <a href="javascript:;" class="">我的收藏</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shop {
    background-color: #f6f5f4;
    width: 100%;
    height: 100%;
  }

  .shop_header {
    background-color: #fff;
    position: absolute;
    color: #333;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #999;
    div {
      float: left;
      margin-right: 20px;
      width: 20px;
      height: 20px;
    }
    .topbar-title {
      vertical-align: middle;
    }
    .J_bur {
      vertical-align: middle;
      background-image: url("../../common/images/imgtk-new.png");
      float: right;
      width: 20px;
      height: 20px;
      background-size: 20px;
      margin-top: 20px;
      margin-right: 20px;
    }
  }

  .m-emptycoupon {
    height: 298px;
    width: 100%;
    background-color: #fff;
    padding-top: 50px;
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

