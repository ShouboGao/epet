<template>
  <div ref="count1">
  </div>
</template>

<script>
  import Countdown from 'js-countdown'
  export default {
    mounted(){
      new Countdown(this.$refs.count1, {
        format: "hh:mm:ss",
        lastTime: "2018-01-06 19:50:00"
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

