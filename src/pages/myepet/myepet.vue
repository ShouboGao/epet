<template>
  <div>
    <div class="login_bg">
      <div class="head-top">
        <span onclick="history.go(-1)" class="back"></span>
        <div class="zfont">
          <a href="https://wap.epet.com/register.html">注册</a>
        </div>
      </div>
      <div class="mlogo">
        <img src="//static.epetbar.com/mpet/images/login/logo.png">
      </div>
      <div class="es_por4">
        <ul>
          <li :class="{selected:commoni}" @click="toggleShow(true)" ref="common">
            <a href="javascript:;">普通登录</a>
            <i></i>
          </li>
          <li :class="{selected:phonei}" @click="toggleShow(false)" ref="phone">
            <a href="javascript:;">手机动态密码登录</a>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="mformBox">
        <div>
          <form method="post" action="">
            <div ref="form1">
              <ul class="mform">
                <li>
                  <span class="mNameIco"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名" name="username" ref="username">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="password" placeholder="输入密码" name="password" ref="password">
                </li>
              </ul>
            </div>
          </form>
          <form method="post" action="">
            <div style="display: none" ref="form2">
              <ul class="mform">
                <li>
                  <span class="mNumIco"></span>
                  <input type="text" placeholder="已注册的手机号" name="phone" ref="phone">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="text" placeholder="请输入图片内容" name="varify" ref="varify">
                  <span class="imgwrapper">
                    <img src="https://wap.epet.com/share/seccode.html?hash=5157&height=30&width=85" name="varify"
                         @click="changeimg">
                  </span>
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="text" placeholder="动态密码" name="code">
                  <a @click="getchangepsd" class="get_phonepass">获取动态密码</a>
                </li>
              </ul>
              <div class="forget_pass"></div>
            </div>
          </form>
        </div>
      </div>
      <div class="forget">
        <a href="javascript:;">忘记密码？</a>
        <div class="clear"></div>
      </div>
      <div class="loginbtn">
        <a href="javascript:;">登 录</a>
      </div>

    </div>
    <div class='empty'></div>
    <div class="other-login">
      <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
      <ul>
        <li>
          <a
            href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
            <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
          </a>
        </li>
        <li>
          <a
            href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
            <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        commoni: true,
        phonei: false
      }
    },
    methods: {
      toggleShow (isShow) {
        if (isShow) {
          this.$refs.form1.style.display = 'block';
          this.$refs.form2.style.display = 'none';
          this.commoni = true;
          this.phonei = false;
        } else {
          this.$refs.form1.style.display = 'none';
          this.$refs.form2.style.display = 'block';
          this.commoni = false;
          this.phonei = true;
        }
      },
      changeimg (ev) {
        ev.target.src = `https://wap.epet.com/share/seccode.html?hash=${new Date()}&height=30&width=85`
      },
      //手机获取验证码
      getchangepsd(){
        let phone = this.$refs.phone.value;
        console.log(phone);
        axios.get(`api/sendcode?phone=${phone}`)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_bg
    background: url(../../common/images/login-bg.png) no-repeat;
    background-size: 100% 100%;
    .head-top
      height: 50px;
      line-height: 50px;
      position: relative;
      padding: 0 1em;
      text-align: center;
      .back
        display: block;
        width: 22px;
        height: 20px;
        position: absolute;
        margin-top: 16px;
        background: url(../../common/images/back1.png) no-repeat;
        background-size: 12px 17px;
      .zfont
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 1.2em;
        a
          color: #fff;
    .mlogo
      padding: 1em 0 2em 0;
      img
        display: block;
        margin: auto;
        width: 20%;
    .es_por4
      background-color: rgba(255, 255, 255, 0.3);
      ul
        overflow hidden
        li
          float: left;
          width: 50%;
          text-align: center;
          height: 44px;
          line-height: 44px;
          position: relative;
          a
            font-size: 15px;
            color: #fff;
            display: block;
          &.selected i
            display: block;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            margin: auto;

  .content
    background: #fff;
    .mformBox
      background: #fff;
      border-radius: 0.5em;
      margin: 0em 4% 1em 4%;
      padding: 0 1.6%;
      .mform li
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0 12px 30px;
        position: relative;
        .get_phonepass
          background: #fff;
          color: #ff4259;
          border: 1px solid #eb4c33;
          position: absolute;
          right: 0;
          top: 0.5em;
          border-radius: 3px;
          width: 100px;
          text-align: center;
          padding: 0.3em 0;
        .imgwrapper
          display: block;
          position: absolute;
          top: 5px;
          right: 0px;
        input
          display: block;
          height: 21px;
          width: 100%;
          font-size: 15px;
          border: none;
          padding: 0px;
          color: #666;
          font-family: "Microsoft Yahei", tahoma, arial;
          outline: none;
        .mNameIco
          float: left;
          display: inline;
          width: 17px;
          height: 21px;
          background: url(../../common/images/ico3.png) no-repeat;
          background-size: contain;
          margin: 1px 0 0 -25px;
        .mpasswordIco
          float: left;
          display: inline;
          width: 17px;
          height: 20px;
          margin: 0px 0 0 -25px;
          background: url(../../common/images/ico4.png) no-repeat;
          background-size: contain;
        .mNumIco
          float: left;
          display: inline;
          width: 17px;
          height: 17px;
          background: url(../../common/images/ico1.png) no-repeat;
          background-size: contain;
          margin: 2px 0 0 -25px;
    .forget
      padding-left: 2em;
      padding-right: 1em;
      text-align: center;
      a
        color: #898989;
        font-size: 1em;
        float: right;
    .loginbtn
      padding-top: 1.5em;
      text-align: center;
      a
        display: block;
        color: #fff;
        letter-spacing: 5px;
        margin: 0 5%;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .8em 0;
        text-align: center;

  .empty
    height: 110px;

  .other-login
    .partners
      color: #d7d7d7;
      margin-top: 0.5em;
      font-size: 1.2em;
      text-align: center;
    ul
      padding: 0 1rem;
      overflow hidden
      li
        width: 33.3%;
        padding: 0 1em;
        float: left;
        box-sizing border-box
        img
          width: 60%;
          max-width: 176px;

</style>
