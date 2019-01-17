<template>
  <div id="domains">
    <siteNav :background="true"></siteNav>
    <currentSearch :search="search"></currentSearch>
    <wordList :words="state.saved"></wordList>
  </div>
</template>

<style lang="scss" scoped>
  #domains {  
  }
</style>

<script>
  import checker from "../checker.js"
  import siteNav from "./nav.vue"
  import currentSearch from "./current-search.vue"
  import wordList from "./list.vue"

  export default {
    components: {
      siteNav, currentSearch, wordList
    },
    data () {
      return {
        state: this.$d,
        search: {
        	name: false,
        	description: false,
        },
      }
    },
  }
</script>
