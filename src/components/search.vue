<template>
  <div id="search" class="flexi-c r">
    <div class="flexi-i">
      <div class="search-left">
        <h1 class="search-title">Markov Name Generator</h1>
        <p class="search-subtitle">Generate pronounceable names and check domain availability instantly</p>
      </div>
    </div>

    <div class="flexi-i">
      <div class="search-row">
        <a href="/?search=latin" class="search-link">Latin</a>
        <a href="/?search=latin" class="search-link">Greek</a>
        <a href="/?search=latin" class="search-link">Germanic</a>
      </div>

      <div class="search-row">
        <a href="/?search=latin" class="search-link">French</a>
        <a href="/?search=latin" class="search-link">Sciency</a>
        <a href="/?search=latin" class="search-link">Slavic</a>
        <a href="/?search=latin" class="search-link">Scandinavian</a>
      </div>

      <div class="search-row">
        <a href="/?search=latin" class="search-link">Japanese</a>
        <a href="/?search=latin" class="search-link">Fantasy</a>
        <a href="/?search=latin" class="search-link">Sci-Fi</a>
      </div>

      <div class="search-row">
        <a href="/?search=latin" class="search-link">Artsy</a>
        <a href="/?search=latin" class="search-link">Slang</a>
        <a href="/?search=latin" class="search-link">Profanity</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #search {
    margin-top: 10px;
    padding: 100px 40px;
    border-radius: 3px;
    background: gray;

    .search-left {
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      .search-title {
        padding-bottom: 10px;
        font: 600 44px/44px sans-serif;
      }
      .search-subtitle {
        font: 400 28px/32px sans-serif;
      }
    }

    

    .search-row {
      padding: 5px 0;
      text-align: right;
    }

    .search-link {
      display: inline-block;
      margin-left: 3px;
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
