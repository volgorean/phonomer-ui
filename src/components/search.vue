<template>
  <div id="domains">
    <siteNav :background="true"></siteNav>
    <currentSearch :search="search"></currentSearch>
    <wordList :words="words"></wordList>
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
        search: false,
        words: [],
      }
    },
    methods: {
      getSearch: function() {
        fetch("http://localhost:3000/generate/"+this.$route.params.id)
        .then(res => res.json())
        .then(data=> {
          this.$data.search = {
            name: data.name,
            description: data.description,
          }
          this.$data.words = data.results
        })
        .catch(err=> {
          console.log(err)
        })
      },
    },
    mounted() {
      this.getSearch()
    }
  }
</script>

