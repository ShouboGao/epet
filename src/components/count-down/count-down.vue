<template>
  <p :endTime="endTime" :callback="callback" :endText="endText" class="timing">
    <span class="hh">{{hh}}</span> :
    <span class="mm">{{mm}}</span> :
    <span class="ss">{{ss}}</span>
  </p>
</template>
<script>
  export default {
    data () {
      return {
        day: '00',
        hh: '00',
        mm: '00',
        ss: '00'
      }
    },
    props: {
      endTime: String,
      endText: String,
      callback: Function
    },
    mounted () {
      this.countdowm(this.endTime)
    },
    methods: {
      countdowm (timestamp) {
        let timer = setInterval(() => {
          let nowTime = new Date()
          let endTime = new Date(timestamp * 1)
          let t = endTime.getTime() - nowTime.getTime()
          if (t > 0) {
            let day = Math.floor(t / 86400000)
            let hour = Math.floor((t / 3600000) % 24)
            let min = Math.floor((t / 60000) % 60)
            let sec = Math.floor((t / 1000) % 60)
            hour = hour < 10 ? '0' + hour : hour
            min = min < 10 ? '0' + min : min
            sec = sec < 10 ? '0' + sec : sec
            if (day > 0) {
              this.day = day
              this.hh = hour
              this.mm = min
              this.ss = sec
            }
            if (day <= 0 && hour > 0) {
              this.hh = hour
              this.mm = min
              this.ss = sec
            }
            if (day <= 0 && hour <= 0) {
              this.hh = '00'
              this.mm = min
              this.ss = sec
            }
          } else {
            clearInterval(timer)
            this.content = this.endText
            this._callback()
          }
        }, 1000)
      },
      _callback () {
        if (this.callback && this.callback instanceof Function) {
          this.callback(...this)
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
