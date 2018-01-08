<template>
  <div v-if="surprise.info" class="surprise">
    <div class="supr-title">
      <img :src="surprise.info.surprise_icon.image">
      <p class="timing">
        距本场结束
        <count-down :endTime="`${endTimeout}`" :callback="cb" endText="已经结束了"></count-down>
      </p>
      <div class="more">
        <img :src="surprise.info.right_image.image">
      </div>
    </div>
    <div class="supr-cont" ref="wrapper">
      <ul :style="{width: `${107*surprise.info.goods.length}px`}">
        <li v-for="(sale,index) in surprise.info" :key>
          <a href="#">
            <img :src="sale.image" alt="">
            <p class="price">￥{{sale.sale_price}}</p>
            <p class="savePrice">省￥{{sale.little_price}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import coutnDown from '../count-down/count-down.vue'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      if (!this.surprise.info) {
        return
      }
      this._initScroll()
    },
    computed: {
      ...mapState(['surprise']),
      endTimeout () {
        // 模拟一个时间：当前时间 + 18个小时 - 随机的10个小时
        return (
          Date.parse(new Date()) +
          (18 * 60 * 60 * 1000) -
          (Math.floor(Math.random() * 1000 * 60 * 60 * 10))
        )
      }
    },
    methods: {
      _initScroll () {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        })
      },
      cb () {
      }
    },
    watch: {
      surprise (oldval, newval) {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this._initScroll()
        }
      }
    },
    components: {
      'count-down': coutnDown
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .surprise
    .supr-title
      display flex
      padding 10px
      img
        height 24px
        margin-left -20px
      .timing
        ft(12px)
        p
          display inline-block
          span
            border 1px solid #ccc
            border-radius 2px
      .more
        flex auto
        text-align right
        img
          height 50px
          margin -15px -15px 0 0
    .supr-cont
      & > ul
        ft(0px)
        white-space nowrap
        li
          display inline-block
          padding 0 7px
          margin-right 10px
          text-align center
          ft(14px)
          a
            img
              width 85px
              height 85px
            .price
              c(#f00)
            .savePrice
              transform scale(0.9)
              c(#999)
</style>
