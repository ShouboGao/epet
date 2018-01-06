<template>
  <div class="content">
    <div class="xiazaiApp" v-show="flag">
      <div class="overflow">
        <span class="clsoebtn" @click="close">
          <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a
            href="https://wap.epet.com/download.html?do=market&amp;utm_content=mob1%E5%93%81%E7%89%8C%E8%AF%8De%E5%AE%A0%E7%89%A9%E7%BD%91&amp;utm_type=content">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
          </a>
        </div>
      </div>
    </div>
    <petHeader></petHeader>
    <div class="scrollWrapper" ref="scrollWrapper">
      <div>
        <carousel></carousel>
        <column></column>
        <split></split>
        <div>
          <div class="banner_item">
            <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif">
            </a>
          </div>
        </div>
        <surprise></surprise>
        <split></split>
        <imagea></imagea>
        <split></split>
        <currencyAd></currencyAd>
        <split></split>
        <minheader></minheader>
        <titearea></titearea>
        <split></split>
        <minheader></minheader>
        <titearea></titearea>
        <split></split>
        <imagea></imagea>
        <split></split>
        <imagea></imagea>
        <split></split>
        <imagea></imagea>
        <split></split>
        <minheader></minheader>
        <titearea></titearea>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import header from '../../components/header/header.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import column from '../../components/column/column.vue'
  import split from '../../components/split/split.vue'
  import surprise from '../../components/surprise/surprise.vue'
  import imagea from '../../components/imagea/imagea.vue'
  import currencyAd from '../../components/currencyad/currencyad.vue'
  import minheader from '../../components/custom_tite/minheader.vue'
  import titearea from '../../components/custom_tite/titearea.vue'
  export default {
    data () {
      return {
        flag: true
      }
    },
    mounted() {
      new BScroll(this.$refs.scrollWrapper, {
        click: true
      });
    },
    methods: {
      close () {
        this.flag = false;
      }
    },
    components: {
      petHeader: header,
      carousel,
      column,
      split,
      surprise,
      imagea,
      currencyAd,
      minheader,
      titearea,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    height 100%
    .xiazaiApp
      max-width: 640px;
      margin: 0 auto;
      background: rgba(61, 61, 61, 1);
      color: #fff;
      position: relative;
      z-index: 102;
      overflow: hidden !important;
    .overflow
      position: relative;
      overflow: hidden !important;
      .clsoebtn
        display: inline-block;
        width: 5%;
        margin-right: 2%;
        vertical-align: middle;
        position: absolute;
        top: 20%;
        left: 2%;
        img
          height: 100%;
          width: 100%;
          vertical-align: middle;

      .appdowimg
        a
          color: #333;
          img
            width: 100%;
            vertical-align: middle;
    .scrollWrapper
      height 100%
      /*padding-bottom 46px*/
      .banner_item
        width 100%
        img
          width 100%
</style>

