<template>
  <div class="content">
    <router-view></router-view>
    <div class="footernav">
      <ul>
        <li class="home">
          <span class="footericon" @click="change"><router-link to="/home"></router-link></span>
        </li>
        <li class="classify">
          <span class="footericon" @click="change"><router-link to="/classify"></router-link></span>
        </li>
        <li class="shopcart">
          <span class="footericon" @click="change"><router-link to="/shopcart"></router-link></span>
        </li>
        <li class="myepet">
          <span class="footericon" @click="change"><router-link to="/myepet"></router-link></span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    methods: {
      change (ev) {
        let footericons = document.querySelectorAll('.footericon');
        for (var i = 0; i < footericons.length; i++) {
          footericons[i].style.backgroundPositionX = '-85px';
          event.target.parentNode.style.backgroundPositionX = '0px';
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    height 45px
    line-height 45px
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 103
    border-top 1px solid #e7e7e7
    background #fff
    li
      float: left;
      width: 25%;
      height: 55px
      text-align center
      span
        display inline-block
        background: url(./common/images/footer.png) no-repeat;
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
</style>
