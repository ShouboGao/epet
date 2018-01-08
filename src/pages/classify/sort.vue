<template>
  <div>
    <div class="leftbox" id="left">
      <div class="leftWrapper" ref="leftWrapper">
        <div>
          <ul v-if="sort[0]">
            <li :class="{on:isFirst==index}" v-for="(category,index) in sort[0].categorys" :key="index" @click="addon">
              {{category.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rightbox" ref="rightWrapper">
      <div>
        <div class="hot-recom" v-if="sort[1]">
          <span class="title">{{sort[1].cate_list.title}}</span>
          <ul class="clearfix">
            <li v-for="(list,index) in sort[1].cate_list.lists">
              <span class="db">
                <div>
                  <img :src="list.photo">
                </div>
                <p class="text">{{list.name}}</p>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  import {mapState} from 'vuex';

  export default {
    data () {
      return {
        isFirst: 0
      }
    },
    mounted () {
      this.$store.dispatch('reqsort');
      new Bscroll(this.$refs.leftWrapper, {
        click: true
      });
      new Bscroll(this.$refs.rightWrapper, {
        click: true
      });
    },
    computed: {
      ...mapState(['sort'])
    },
    methods: {
      addon (event) {
        let lis = document.getElementById('left').getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
          lis[i].className = '';
          //将点击的元素添加classname为on
          event.target.className = 'on';
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .leftbox
    position: fixed;
    top: 42px;
    left: 0;
    overflow-y: scroll;
    bottom: 0;
    padding-bottom: 45px;
    background: #fff;
    .leftWrapper
      height: 100%
      overflow hidden
      li
        width: 70px;
        height: 50px;
        line-height 50px
        background: #fff;
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        &.on
          background: #f3f4f5;
          color: #ed4044;

  .rightbox
    margin-left: 75px;
    background: #fff;
    .hot-recom
      padding: 15px 5px 20px;
      border-top: 1px solid #f3f4f5;
      .title
        display: block;
        font-size: 12px;
        color: #999;
        padding-left: 5px;
        margin-top: 10px;

      ul
        overflow hidden
        li
          float: left;
          width: 33.33%;
          /*padding: 0 5px;*/
          margin-top: 10px;
          .db
            display: block;
            div
              position: relative;
              padding-top: 100%;
              img
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
            .text
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              font-size: 12px;
              color: #333;
              margin-top: 10px;
              text-align: center;

</style>
