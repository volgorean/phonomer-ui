<template>
  <div id="search">
    <a :href="s.link" class="search-link" v-for="s in searches">{{s.name}}</a>
  </div>
</template>

<style lang="scss" scoped>
  #search {
    padding: 40px;
    text-align: center;

    .search-link {
      margin: 0 3px;
      padding: 10px 20px;
      border-radius: 3px;
      font: 500 26px/26px sans-serif;
      background: white;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        searches: [
          {
            name: "Latin",
            link: "/?search=latin",
          },
          {
            name: "Greek",
            link: "/?search=latin",
          },
          {
            name: "Germanic",
            link: "/?search=latin",
          },
          {
            name: "French",
            link: "/?search=latin",
          },
          {
            name: "Sciency",
            link: "/?search=latin",
          },
        ]
      }
    },
  }
</script>
