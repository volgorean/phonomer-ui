<template>
  <div id="search">
    <div class="content">
      <h1 class="search-title">Custom Search</h1>
      <p class="search-subtitle">Aliquam aliquam massa sit amet sapien scelerisque posuere. Suspendisse potenti. Praesent condimentum ipsum eget odio iaculis, vel suscipit nisi sagittis. Curabitur maximus accumsan molestie.....</p>

      <h2 class="search-options-title">Domains</h2>
      <div class="search-options">
        <div class="search-option" v-for="t in tlds">
          <p>{{t}}</p>
        </div>
      </div>

      <br>

      <h2 class="search-options-title">Usernames</h2>
      <div class="search-options">
        <div class="search-option" v-for="s in social">
          <p>{{s}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #search {
    width: 100%;
    padding: 60px 0;
    background: #833471;

    .search-title {
      padding-bottom: 10px;
      font: 300 44px/44px 'Hind Vadodara', sans-serif;
      color: white;
    }
    .search-subtitle {
      padding-bottom: 20px;
      font: 300 18px/24px 'Hind Vadodara', sans-serif;
      color: #c9c8c8;
    }
    .search-options-title {
      padding-bottom: 10px;
      font: 300 22px/22px 'Hind Vadodara', sans-serif;
      color: white;
    }
    .search-options {
      display: grid;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      justify-content: center;

      .search-option {
        padding: 10px;
        background: #6F1E51;
        text-align: center;
        font: 500 16px/16px 'Hind Vadodara', sans-serif;
        color: white;
      }
    }
  }
</style>

<script>
  export default {
    props: [],
    data () {
      return {
        tlds: [".com", ".co", ".net", ".org", ".us", ".co.uk", ".eu", ".ca", ".it", ".in", ".me", ".tv", ".io", ".ai"],
        social: ["Reddit", "Twitter", "AngelList", "Github", "Quora", "Telegram", "Paypal", "Behance", "Etsy"],
      }
    },
  }
</script>