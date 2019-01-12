<template>
  <div id="domains">
    <siteNav :background="true"></siteNav>
    <currentSearch :search="search" @select="s=> tlds=s"></currentSearch>

    <div class="domain-list content">
      <div class="domain" v-for="d in domains">
        <div class="flexi-c r">
          <div class="flexi-i">
            <p class="domain-title">{{d.domain}}</p>
            <p class="domain-parts">{{d.parts.join("-")}}</p>
          </div>
          
          <img class="star" src="~images/star.svg" :class="{active: d.starred}" @click="d.starred=!d.starred">
        </div>

        <p class="domain-tlds" v-if="tlds.length > 0">
          <span class="domain-tld" v-for="t in tlds">✓ {{t.name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #domains {
    .domain-list {
      display: grid;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 40px;

      .domain {
        padding: 15px 20px;
        border-radius: 3px;
        background: #6F1E51;

        .domain-title {
          padding-bottom: 3px;
          font: 600 18px/18px 'Hind Vadodara', sans-serif;
          color: white;
        }
        .domain-parts {
          font: 400 14px/14px 'Hind Vadodara', sans-serif;
          color: #d2d2d2;
        }
        .star {
          height: 26px;
          flex: 0 0 26px;
          cursor: pointer;

          &:not(.active) {
            filter: grayscale(100%);
            opacity: 0.3;
          }
        }
        .domain-tlds {
          padding-top: 10px;

          .domain-tld {
            display: inline-block;
            margin-top: 2px;
            margin-right: 2px;
            padding: 2px 4px;
            border-radius: 3px;
            border: 1px solid white;
            font: 400 14px/14px 'Hind Vadodara', sans-serif;
            color: white;
          }
        }
      }
    }  
  }
</style>

<script>
  import siteNav from "./nav.vue"
  import currentSearch from "./current-search.vue"
  import searches from "./searches.js"

  export default {
    components: {
      siteNav, currentSearch
    },
    data () {
      return {
        search: false,
        domains: [],
        tlds: [],
      }
    },
    methods: {
      getSearch: function() {
        let id = this.$route.params.id
        let s = searches[id]        

        // if (id == "custom") {

        // }
        if (s) {
          this.$data.search = s
          this.getWords(s.key)
        }
      },
      getWords: function(id) {
        fetch("http://localhost:3000/generate/"+id)
        .then(res => res.json())
        .then(data=> {
          data.results.forEach(r=> {
            this.$data.domains.push({
              domain: r.word,
              parts: r.parts,
              available: false,
              starred: false,
            })
          })
        })
        .catch(err=> {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getSearch()
    }
  }
</script>
