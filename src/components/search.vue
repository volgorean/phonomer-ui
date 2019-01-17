<template>
  <div id="domains">
    <siteNav :background="true"></siteNav>

    <template v-if="found">
      <currentSearch :search="search"></currentSearch>
      <wordList :words="words"></wordList>
    </template>

    <notFound v-else></notFound>
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
  import notFound from "./404.vue"

  export default {
    components: {
      siteNav, currentSearch, wordList, notFound
    },
    data () {
      return {
        found: true,
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
          this.$data.found = false
        })
      },
    },
    mounted() {
      this.getSearch()
    }
  }
</script>

