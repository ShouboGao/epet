<template>
  <div>
    <div class="indexheader">
      <div class="indexnavcon">
        <div class="headerbox float-div">
          <div class="main">
            <div class="clearfix">
              <div class="epet-search">
                <div class="location">
                  <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
                    <span class="catordog c89">狗狗站</span>
                    <span class="c89">|</span>
                    <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                    <i></i></a>
                </div>
                <p class="search-text">
                  <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                    <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                    <span class="eico serach-ico"></span>
                  </a>
                </p>
                <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                  <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
                </a>
              </div>
            </div>
            <div class="find_nav">
              <div class="find_nav_left dscroll">
                <div class="find_nav_list" ref="menuWrapper">
                  <ul class="dscroll-ul">
                    <li class="dscroll-li" v-for="(menu,index) in home.menus" :key="index">
                      <router-link to="/classify">
                        <span class="rela"><span>{{menu.menu_name}}</span><i></i></span>
                      </router-link>
                      <router-view></router-view>
                      <!--<a href=""><span class="rela"><span>{{menu.menu_name}}</span><i></i></span></a>-->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="switchtype">
        <div type="dog" class="go-dog" @click="show_pop"></div>
        <div class="main_pop" ref="main_pop">
          <div class="pop_wrap">
            <p class="">{{msg[1].en_name}}
            </p>
            <p class="">▁</p>
            <p class="">亲爱的小主</p>
            <p class="">您即将进入
              <span>{{msg[1].ch_name}}</span>
            </p>
            <p class="current-line c000 ft12">▁</p>
            <ul class="clearfix ftc change-ul">
              <li type="cat" class="pet1" @click="changeL"><img :src="msg[0].logo">
                <p class="pet1name">{{msg[0].ch_name}}</p>
              </li>
              <li type="dog" class="fl pet2 mainpet rela dog"><img :src="msg[1].logo">
                <p :style="{color:msg[1].color}">{{msg[1].ch_name}}</p>
              </li>
              <li type="fish" class="fl pet3 fish" @click="changeR"><img :src="msg[2].logo">
                <p class="pet3name">{{msg[2].ch_name}}</p>
              </li>
            </ul>
            <p>
              <a href="javascript:;" class="once-into">立即进入</a>
            </p>
          </div>
          <a href="javascript:;" class="cartc-close" @click="close">
            <img src="../common/images/close2.png">
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        msg: [
          {
            en_name: 'CAT',
            ch_name: '猫猫站',
            logo: require('../common/images/change-cat.png'),
            color: '#e74186'
          },
          {
            en_name: 'DOG',
            ch_name: '狗狗站',
            logo: require('../common/images/change-dog1.png'),
            color: '#4e9a36'
          },
          {
            en_name: 'FISH',
            ch_name: '水族站',
            logo: require('../common/images/change-fish.png'),
            color: '#039ddf'
          }
        ]
      }
    },
    mounted() {
      new BScroll(this.$refs.menuWrapper, {
        scrollX: true,
        click: true
      })
      this.$store.dispatch('reqhome');
    },
    methods: {
      show_pop(){
        this.$refs.main_pop.style.transform = 'scale(1,1)';
        this.$refs.main_pop.style.opacity = 1;
      },
      close(){
        this.$refs.main_pop.style.transform = 'scale(.01,.01)';
        this.$refs.main_pop.style.opacity = 0;
      },
      changeL(){
        let tem1 = this.msg[0];
        let tem2 = this.msg[1];
        this.msg.splice(0, 1, tem2);
        this.msg.splice(1, 1, tem1);
      },
      changeR(){
        let tem1 = this.msg[1];
        let tem2 = this.msg[2];
        this.msg.splice(1, 1, tem2);
        this.msg.splice(2, 1, tem1);
      },
    },
    computed: {
      ...mapState(['home']),
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .indexnavcon
    position relative
    z-index 99
    height: 86px;
    background white
    .main
      max-width: 640px;
      margin: auto;
      .clearfix
        padding: 5px 10px;
        .epet-search
          padding: 8px 0;
          background: #fff;
          text-align: center;
          display: -webkit-box;
          -webkit-box-align: center;
          display: -moz-box;
          -moz-box-align: center;
          width: 100%;
          .location
            margin-right: 20px;
            position: relative;
            font-size: 14px;
            float: left;
            a
              color: #333;
            i
              position: absolute;
              top: 5px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;

          p
            position: relative;
            -webkit-box-flex: 1;
            a
              color: #333;
              input
                width: 100%;
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
              .serach-ico
                width: 11px;
                height: 11px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                background-position: 0 0;
                background: url(../common/images/search.png) no-repeat;
                background-size: 11px auto;

          a
            display: block;
            color: #333;
            img
              width: 25px;
              margin-left: 10px;
              vertical-align: middle;

      .find_nav
        width: 100%;
        height: 35px;
        min-width: 320px;
        .dscroll
          height 100%
          .find_nav_list
            width: 100%;
            height 100%
            .dscroll-ul
              display: flex;
              width 140%
              height 100%
              .dscroll-li
                width: 74.5px;
                float: left;
                text-align center
                &:first-child
                  span
                    color: #459d36;
                    display: inline-block;
                    position relative
                    i
                      background: #459d36;
                      position: absolute;
                      bottom: 1px;
                      left: -10%;
                      width: 120%;
                      height: 2px;
                a
                  display: block;
                  width: 100%;
                  height: 100%;
                  line-height: 36px;
                  font-size: 14px;
                  text-align: center;
                  color: #666;

  .switchtype
    .go-dog
      background: url(../common/images/godog.png) no-repeat;
      width: 41px;
      height: 46px;
      background-size: 80px auto;
      position: fixed;
      bottom: 15%;
      right: -1px;
      z-index: 2;
      -webkit-animation: nnh 2.5s steps(2) infinite;
      animation: nnh 2.5s steps(2) infinite;

    .main_pop {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 111;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transition: all .4s linear;
      transform: scale(.01, .01);
      opacity: 0;
      .pop_wrap {
        position: absolute;
        top: 107.5px;
        left: 0;
        width: 100%;
        p {
          text-align: center;
          color: #999;
          margin-top: 20px;
        }
        ul {
          text-align: center;
          margin-top: 30px;
          li {
            display: inline-block;
            p {
              margin-top: 5px;
            }
          }
          .pet1,
          .pet3 {
            width: 84px;
            height: 88px;
            text-align: center;
            img {
              width: 59px;
              height: 65px;
            }
          }
          .pet2 {
            width: 135px;
            height: 188px;
            text-align: center;
            img {
              width: 108px;
              height: 110px;
            }
          }
        }
        .once-into {
          background: #039ddf;
          border-radius: 30px;
          padding: 3px 15px;
          margin-top: 25px;
          font-size: 12px;
          color: #fff;
        }
      }
      .cartc-close {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid rgb(231, 231, 231);
        text-align: center;
        line-height: 40px;
        img {
          width: 23px;
          height: 23px;
          vertical-align: middle;
        }
      }
    }

  @keyframes nnh {
    from {
      background-position: 0% 0%
    }
    to {
      background-position: 210% 0%
    }
  }
</style>
