<template>
  <div id="domains">
    <div class="domain flexi-c r" v-for="d in domains">
      <div class="flexi-i">
        <p class="domain-title">{{d.domain}}</p>
        <p class="domain-parts">{{d.parts.join("-")}}</p>
      </div>
      
      <div class="domain-status">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #domains {
    padding-top: 40px;

    display: grid;
    width: calc(100%-20px);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    justify-content: center;

    .domain {
      padding: 15px 20px;
      border-radius: 3px;
      background: white;

      .domain-title {
        padding-bottom: 2px;
        font: 600 18px/18px sans-serif;
      }
      .domain-parts {
        font: 400 14px/14px sans-serif;
        color: gray;
      }
      .domain-status {
        flex: 0 0 34px;
        height: 34px;
        border-radius: 50%;
        border: 3px solid lightgray;
      }
    }
  }
</style>

<script>
  import domains from "./domains.js"

  export default {
    data () {
      return {
        domains: domains
      }
    },
  }
</script>
