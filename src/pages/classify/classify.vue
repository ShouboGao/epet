<template>
  <div>
    <header>
      <div class="sort nav-sort">
        <router-link to="/classify/sort"><span>分类</span></router-link>
      </div>
      <div class="brand nav-sort">
        <router-link to="/classify/brand"><span>品牌</span></router-link>
      </div>
      <img src="../../common/images/search.png" class="search">
    </header>
      <router-view></router-view>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    height: 40px;
    background: #fff;
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    .nav-sort
      float: left;
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-weight: 700;
      box-sizing border-box
      span
        display: inline-block;
        height: 40px;
        padding: 0 4px;
        cursor: pointer;
      .router-link-active span
        color: #ed4044;
        border-bottom: 2px solid #ed4044;
    .sort
      text-align: right;
      padding-right: 5%;
      font-size: 13px;
    .brand
      padding-left: 5%;
      font-size: 13px;
    .search
      position: absolute;
      top: 15px;
      right: 15px;
      width: 16px;
      height: 16px;
</style>
