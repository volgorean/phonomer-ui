<template>
  <div id="search">
    <div class="content">
      <h1 class="search-title">{{search.name}} Search</h1>
      <p class="search-subtitle" v-else>{{search.description}}</p>

      <h2 class="search-options-title">Domains</h2>
      <div class="search-options">
        <p v-for="t in tlds" class="search-option" :class="{active: t.active}" @click="toggle(t)">{{t.name}}</p>
      </div>

      <br>

      <h2 class="search-options-title">Usernames</h2>
      <div class="search-options">
        <p v-for="s in social" class="search-option" :class="{active: s.active}" @click="toggle(s)">{{s.name}}</p>
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
        background: #6F1E514D;
        text-align: center;
        font: 500 16px/16px 'Hind Vadodara', sans-serif;
        color: white;
        cursor: pointer;

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
        tlds: [
          {name: ".com", active: false},
          {name: ".co", active: false},
          {name: ".net", active: false},
          {name: ".org", active: false},
          {name: ".us", active: false},
          {name: ".co.uk", active: false},
          {name: ".eu", active: false},
          {name: ".ca", active: false},
          {name: ".it", active: false},
          {name: ".in", active: false},
          {name: ".me", active: false},
          {name: ".tv", active: false},
          {name: ".io", active: false},
          {name: ".ai", active: false},
        ],
        social: [
          {name: "Reddit", active: false},
          {name: "Twitter", active: false},
          {name: "AngelList", active: false},
          {name: "Github", active: false},
          {name: "Quora", active: false},
          {name: "Telegram", active: false},
          {name: "Paypal", active: false},
          {name: "Behance", active: false},
          {name: "Etsy", active: false},
        ],
      }
    },
    methods: {
      toggle: function(opt) {
        opt.active = !opt.active
        let activeOpts = this.$data.tlds.filter(x=> x.active).concat(
          this.$data.social.filter(x=> x.active)
        )
        this.$emit("select", activeOpts)
      }
    }
  }
</script>