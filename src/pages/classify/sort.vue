<template>
  <div class="nav clear" id="nav" @mouseleave="nowIndex=0">
    <ul>
      <li @mouseenter.stop="nowIndex=0"><span>Tab One</span></li>
      <li @mouseenter.stop="nowIndex=1"><span>Tab Two</span></li>
      <li @mouseenter.stop="nowIndex=2"><span>Tab Three</span></li>
      <li @mouseenter.stop="nowIndex=3"><span>Tab four</span></li>
      <li @mouseenter.stop="nowIndex=4"><span>Tab five</span></li>
      <li @mouseenter.stop="nowIndex=5"><span>Tab six</span></li>
    </ul>
    <div class="slider" :style="{'transform':'translate3d(0,'+nowIndex*40+'px,0)'}"></div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        nowIndex: 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav {
    margin: 40px;
    position: relative;
  }

  .nav li {
    /*float: left;*/
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background: #09f;
    cursor: pointer;
  }

  .nav span {
    position: relative;
    z-index: 2;
  }

  .nav .slider {
    position: absolute;
    transition: all .5s cubic-bezier(0.4, -0.3, 0.57, 1.38);
    width: 100px;
    height: 40px;
    background: #f90;
    top: 0;
    left: 0;
    z-index: 1;
  }

</style>
