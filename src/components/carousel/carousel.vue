<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide-duplicate">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/16/12/1aa311095c577422cf7668bef12b5849.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/15/14/2a19d471840591a5ffdde764fc1e7c0b.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/15/19/2710a37f3059fa9bb73b5aae4a44f100.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide swiper-slide-prev">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/18/10/11bf2b4a0f5e6893226f50a4a6007641.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide swiper-slide-active">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/18/17/d20d97e9e13a6ca49606fa88518cb6a0.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide swiper-slide-next">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/16/12/1aa311095c577422cf7668bef12b5849.jpg@!water">
        </a>
      </div>
      <div class="swiper-slide swiper-slide-duplicate">
        <a href="javascript:;" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/15/14/2a19d471840591a5ffdde764fc1e7c0b.jpg@!water">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    mounted(){
      new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
      })
    },
    computed: {}
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height 160px
    img
      width 100%
      height 100%
</style>
