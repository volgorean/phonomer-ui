<template>
  <div id="domains">
    <siteNav :background="true"></siteNav>

    <div class="domain-list content">
      <div class="domain" v-for="d in domains">
        <div class="flexi-c r">
          <div class="flexi-i">
            <p class="domain-title">{{d.domain}}</p>
            <p class="domain-parts">{{d.parts.join("-")}}</p>
          </div>
          
          <img class="star" src="~images/star.svg" :class="{active: d.starred}" @click="d.starred=!d.starred">
        </div>

        <p class="domain-tlds">
          <span class="domain-tld">✓ .com</span>
          <span class="domain-tld">✓ .co</span>
          <span class="domain-tld">✓ .io</span>
          <span class="domain-tld">✓ .de</span>
          <span class="domain-tld">✓ .co.uk</span>
          <span class="domain-tld">✓ .tv</span>
          <span class="domain-tld">✓ Reddit</span>
          <span class="domain-tld">✓ Twitter</span>
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

  export default {
    components: {
      siteNav
    },
    data () {
      return {
        domains: []
      }
    },
    mounted() {
      fetch("http://localhost:3000/generate/english")
      .then(res => res.json())
      .then(data=> {
        console.log(data)

        data.results.forEach(r=> {
          this.$data.domains.push({
            domain: r.word+".com",
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
  }
</script>
