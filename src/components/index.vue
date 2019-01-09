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
              <h1 class="search-title">Markov Name Generator</h1>
              <p class="search-subtitle">Generate pronounceable names and check domain availability instantly</p>
            </div>
          </div>

          <div class="flexi-i">
            <div class="search-row">
              <a href="/generate/english" class="search-link"><span class="unskew">Latin</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Greek</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Germanic</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/english" class="search-link"><span class="unskew">French</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Sciency</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Slavic</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Scandinavian</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/english" class="search-link"><span class="unskew">Japanese</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Fantasy</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Sci-Fi</span></a>
            </div>

            <div class="search-row">
              <a href="/generate/english" class="search-link"><span class="unskew">Artsy</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Slang</span></a>
              <a href="/generate/english" class="search-link"><span class="unskew">Profanity</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form class="search-custom" @submit.prevent>
      <div class="content flexi-c">
        <div class="search-custom-header flexi-c r">
          <p class="search-custom-title flexi-i">Custom Search</p>
          <p class="search-custom-submit">{{words.length}} / 100 Required</p>
        </div>

        <div class="search-custom-input">
          <p class="search-custom-input-placeholder" v-if="custom.length==0">
            Enter at least 100 words from which to generate.<br>
            Words can be seperated by a newline, comma, or period character.<br>
            <br>
            Example:<br>
            Super<br>
            Duper<br>
            Alpha<br>
            Manager<br>
          </p>
          <textarea v-model="custom"></textarea>
        </div>
      </div>
    </form>
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
        top: 20%;
        left: 0;
        width: 100vw;
        height: 100vh;
        transform: rotate(-75deg);

        .bg-bar-1, .bg-bar-2, .bg-bar-3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
          background: linear-gradient(-90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0) 100%);
        }
        .bg-bar-2 {
          top: 20%;
        }
        .bg-bar-3 {
          top: 40%;
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

    .search-custom {
      flex: 1 0;
      width: 100%;

      .content {
        min-height: 100%;
      }

      .search-custom-header {
        flex: 0 0;
        top: -35px;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 2px 4px rgba(0,0,0,.3);
        background: white;

        .search-custom-title {
          padding: 6px 0;
          font: 400 20px/28px 'Hind Vadodara', sans-serif;
          white-space: nowrap;
        }
        .search-custom-submit {
          flex: 0 0;
          padding: 6px 20px;
          border-radius: 3px;
          font: 500 16px/28px 'Hind Vadodara', sans-serif;
          white-space: nowrap;
          background: #2ecc71;
        }
      }
      .search-custom-input {
        flex: 1 0;
        width: 100%;
        min-height: 300px;
        padding: 0 60px;
        padding-bottom: 20px;

        .search-custom-input-placeholder {
          position: absolute;
          top: 20px;
          left: 80px;
          color: lightgray;
          font: 500 14px/18px 'Hind Vadodara', sans-serif;
        }
        textarea {
          width: 100%;
          height: 100%;
          padding: 20px;
          border-radius: 5px;
          border: 1px solid lightgray;
          background: transparent;
          font: 500 14px/18px 'Hind Vadodara', sans-serif;
        }
      }
    }
  }
</style>

<script>
  import siteNav from "./nav.vue"

  export default {
    components: {
      siteNav
    },
    computed: {
      words: function() {
        return this.$data.custom.split(/\r\n+|\n+|\r+|\s+|,+|\.+/).filter(e => e)
      }
    },
    data () {
      return {
        custom: ""
      }
    },
  }
</script>
