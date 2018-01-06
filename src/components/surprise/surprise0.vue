<template>
  <div class="surprise_day">
    <div class="surprise">
      <div class="surprise-tit" v-if="surprise.info">
        <div class="fl titimg">
          <img :src="surprise.info.surprise_icon.image">
        </div>
        <div class="fl ft13 ml10" style="margin-top: 1px;">{{surprise.info.title}}</div>
        <div class="fl surprise-time hide">{{surprise.info.time}}</div>
        <div class="time ftc fl ml5">
          <div class="time1 dib ft12 dtime">
            <span class="time1-1">00</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">00</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">00</span></div>
        </div>
        <div class="more">
          <a href="">
            <img :src="surprise.info.right_image.image">
          </a>
        </div>
      </div>
      <div class="surprise-pro">
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="surprise.info">
            <div class="swiper-slide2" v-for="(good,index) in surprise.info.goods" :key="index">
              <div class="pro-block">
                <a href="">
                  <div>
                    <img :src="good.image.image">
                  </div>
                  <div class="cred ftc mt5">
                    <span>¥</span>
                    <span>{{good.sale_price}}</span>
                  </div>
                  <p class="c999">{{good.little_price}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    mounted(){
      this.$store.dispatch('reqsurprise');
    },
    computed: {
      ...mapState(['home', 'surprise'])
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise-tit
    position: relative;
    padding: 10px;
    overflow: hidden !important;
    .fl
      float left
    .titimg img
      width 105px
      height: 24px;
      display: block;
      vertical-align: middle;
    .surprise-time.hide
      display: none;
    .ft13.ml10
      margin-top: 1px;
      font-size: 13px;
      margin-left: 10px;
    .time
      margin-left: 5px;
      text-align: center;
      .dib
        display: inline-block;
        font-size: 12px;
        .time1-1
          border: 1px solid #ddd;
          padding: 1px 2px;
          font-size: 13px;
    .more
      position: absolute;
      top: 2px;
      right: -8px;
      img
        display: block;
        margin: 0 0 0 auto;
        width: 50%;

  .surprise-pro
    padding-left: 5px;
    margin-bottom: 10px;
    .swiper-container
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      .swiper-wrapper
        width: 100%;
        height: 100%;
        position: relative;
        .swiper-slide2
          width: 150px !important
          margin-right: 10px;
          .pro-block
            margin: 0 .5em;
            a
              color: #333;
              display: block;
              .image
                vertical-align: middle;
                width: 100%;
              .cred
                color: red;
                margin-top: 5px;
                text-align: center;
              .c999
                color: #999;
</style>
