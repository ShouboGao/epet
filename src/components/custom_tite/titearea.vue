<template>
  <div class="fashion">
    <div>
      <ul class="cmVideoList cmVideoListIndex">
        <li>
          <a href="">
          <div class="relative imgBox overflow">
            <img src="https://img1.epetbar.com/2017-12/13/13/bf5a66590af3b4c59f7bc0de38cb8060.jpg@!500w0h" lazy="loaded">
            <span class="cmallPlayIco"></span>
          </div>
          <div class="ft12 c999 pad10 ftc">
            <div class="textover c333">KIWI KITCHENS狗罐头 一罐装下93%鲜肉</div>
            <div>
              <span class="cmallViewIco mr3"></span>
              <i>15502</i><span class="ml10 mr10">|</span>02:15
            </div>
          </div>
        </a></li>
      </ul>
    </div> <!----></div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cmVideoListIndex li
    padding: 0;
    width: 100%;
    .imgBox
      position: relative;
      overflow: hidden!important;
      img
        width: 100%;
      .cmallPlayIco
        background: url(../../common/images/play.png) 0 0 no-repeat;
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -10px;
        margin-top: -10px;
    .ft12.c999.pad10.ftc
      color: #999;
      font-size: 12px;
      padding: 10px;
      text-align: center;

      .textover
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        word-wrap: normal;
        text-overflow: ellipsis;
      .cmallViewIco
        display: inline-block;
        width: 10px;
        height: 9px;
        margin-right: 3px;
        background: url(../../common/images/view-black.png) 0 0 no-repeat;
        background-size: contain;
      i
        font-style: normal;
      .ml10.mr10
        margin-left: 10px;
        margin-right: 10px;
</style>
