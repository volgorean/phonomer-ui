<template>
  <div id="main" class="middle">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "~styles/global.scss";

  #main {
    background: #FFF;
    overflow: hidden;
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>
