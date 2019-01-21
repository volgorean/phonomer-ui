<template>
  <div id="search">
    <div class="content">
      <h1 class="search-title" v-if="search.name">{{search.name}}</h1>
      <p class="search-subtitle" v-if="search.description">{{search.description}}</p>

      <h2 class="search-options-title">Domains</h2>
      <div class="search-options">
        <p v-for="t in tlds" class="search-option" :class="{active: state.tlds.some(x=> x.key===t.key)}" @click="$s.toggleTld(t)">{{t.name}}</p>
      </div>

      <br>

      <h2 class="search-options-title">Usernames</h2>
      <div class="search-options">
        <p v-for="s in social" class="search-option" :class="{active: state.tlds.some(x=> x.key===s.key)}" @click="$s.toggleTld(s)">{{s.name}}</p>
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
        display: block;
        padding: 10px;
        text-align: center;
        font: 500 16px/16px 'Hind Vadodara', sans-serif;
        color: white;
        cursor: pointer;
        background: #6F1E514D;

        &.active {
          background: #6F1E51;
        }
      }
    }
  }
</style>

<script>
  export default {
    props: ["search"],
    data () {
      return {
        state: this.$d,
        tlds: [
          {name: ".com", key: "com"},
          {name: ".co", key: "co"},
          {name: ".net", key: "net"},
          {name: ".org", key: "org"},
          {name: ".us", key: "us"},
          {name: ".co.uk", key: "couk"},
          {name: ".ca", key: "ca"},
          {name: ".it", key: "it"},
          {name: ".in", key: "in"},
          {name: ".me", key: "me"},
          {name: ".tv", key: "tv"},
          {name: ".sh", key: "sh"},
          {name: ".io", key: "io"},
          {name: ".ai", key: "ai"},
        ],
        social: [
          {name: "Reddit", key: "reddit"},
          {name: "Twitter", key: "twitter"},
          // {name: "AngelList", key: "angellist"},
          {name: "Github", key: "github"},
          // {name: "Quora", key: "quora"},
          // {name: "Telegram", key: "telegram"},
          // {name: "Paypal", key: "paypal"},
          // {name: "Behance", key: "behance"},
          {name: "Etsy", key: "etsy"},
        ],
      }
    },
  }
</script>