<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footerNav">
      <li class="home">
          <span>
            <svgImage className="icon_type" type="#icon-home0"/>
          </span>
        <router-link to="/home">首页</router-link>
      </li>
      <li class="classify">
          <span>
            <svgImage className="icon_type" type="#icon-sort0"/>
          </span>
        <router-link to="/classify">分类</router-link>
      </li>
      <li class="shopcart">
          <span>
            <svgImage className="icon_type" type="#icon-shopcart0"/>
          </span>
        <router-link to="/shopcart">购物车</router-link>
      </li>
      <li class="myepet">
          <span>
            <svgImage className="icon_type" type="#icon-collection0"/>
          </span>
        <router-link to="/myepet">我的收藏</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerNav
    width 100%
    height 46px
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    border-top 1px solid #e7e7e7
    background-color #fff
    display flex
    .home, .classify, .shopcart, .myepet
      display flex
      flex 1
      flex-direction column
      align-items center
      text-align center
      span
        .icon_type
          display block
          width 32px
          height 22px
          margin-top 2px
      a
        font-size 14px
</style>

