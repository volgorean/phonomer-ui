<template>
  <div id="search" class="flexi-c">
    <div class="search-header">
      <div class="bg-bars">
        <div class="bg-bar-1"></div>
        <div class="bg-bar-2"></div>
        <div class="bg-bar-3"></div>
      </div>

      <siteNav :background="false"></siteNav>

      <div class="search-header-content">
        <div class="content flexi-c r">
          <div class="flexi-i">
            <div class="search-left">
              <h1 class="search-title">Name Generator</h1>
              <p class="search-subtitle">Generate pronounceable names and check domain availability instantly</p>
            </div>
          </div>

          <div class="flexi-i">
            <div class="search-row">
              <a href="/generate/latin" class="search-link"><span class="unskew">Latin</span></a>
              <a href="/generate/spanish" class="search-link"><span class="unskew">Spanish</span></a>
              <a href="/generate/german" class="search-link"><span class="unskew">German</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/english" class="search-link"><span class="unskew">English</span></a>
              <a href="/generate/french" class="search-link"><span class="unskew">French</span></a>
              <a href="/generate/russian" class="search-link"><span class="unskew">Russian</span></a>
              <a href="/generate/norwegian" class="search-link"><span class="unskew">Norwegian</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/japanese" class="search-link"><span class="unskew">Japanese</span></a>
              <a href="/generate/vietnamese" class="search-link"><span class="unskew">Vietnamese</span></a>
              <a href="/generate/arabic" class="search-link"><span class="unskew">Arabic</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/fantasy" class="search-link"><span class="unskew">Fantasy</span></a>
              <a href="/generate/scifi" class="search-link"><span class="unskew">Sci-Fi</span></a>
              <a href="/generate/science" class="search-link"><span class="unskew">Science</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <customSearch></customSearch>
  </div>
</template>

<style lang="scss" scoped>
  #search {
    min-height: 100vh;

    .search-header {
      flex: 0 0;
      padding-top: 20px;
      background: #6F1E51;

      .bg-bars {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transform: skewX(-15deg);

        .bg-bar-1, .bg-bar-2, .bg-bar-3 {
          position: absolute;
          top: 0;
          right: 0;
          width: 36%;
          height: 100%;
          opacity: 0.15;
          background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }
        .bg-bar-2 {
          right: 12%;
        }
        .bg-bar-3 {
          right: 24%;
        }
      }

      .search-header-content {
        padding: 160px 20px;
        padding-top: 100px;

        .search-left {
          position: relative;
          top: 50%;
          transform: translateY(-50%);

          .search-title {
            padding-bottom: 10px;
            font: 300 44px/44px 'Hind Vadodara', sans-serif;
            color: white;
          }
          .search-subtitle {
            font: 300 18px/32px 'Hind Vadodara', sans-serif;
            color: #c9c8c8;
          }
        }
        .search-row {
          padding: 5px 0;
          text-align: right;
          white-space: nowrap;

          &:nth-child(2) {
            left: 50px;
          }

          .search-link {
            display: inline-block;
            margin-left: 5px;
            padding: 13px 30px;
            border-radius: 3px;
            box-shadow: 0 2px 4px rgba(0,0,0,.3);
            font: 500 16px/16px 'Hind Vadodara', sans-serif;
            background: white;

            transform: skewX(-15deg);

            .unskew {
              display: inline-block;
              transform: skewX(15deg);
              color: #222222;
            }
          }
        }
      }
    }
  }
</style>

<script>
  import siteNav from "./nav.vue"
  import customSearch from "./custom-search.vue"

  export default {
    components: {
      siteNav, customSearch
    },
  }
</script>
