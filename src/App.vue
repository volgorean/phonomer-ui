<template>
  <div class="middle">
    <searchOpts></searchOpts>
    <domainList></domainList>
  </div>
</template>

<style lang="scss">
  @import "~styles/global.scss";
</style>

<script>
  import searchOpts from "./components/search.vue"
  import domainList from "./components/list.vue"

  export default {
    components: {
      searchOpts, domainList
    },
    data () {
      return {
      }
    },
  }
</script>
