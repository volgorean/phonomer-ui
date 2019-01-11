<template>
  <div id="search">
    <div class="content">
      <h1 class="search-title">Custom Search</h1>
      <p class="search-subtitle">Aliquam aliquam massa sit amet sapien scelerisque posuere. Suspendisse potenti. Praesent condimentum ipsum eget odio iaculis, vel suscipit nisi sagittis. Curabitur maximus accumsan molestie.....</p>

      <div class="search-options">
        <div class="search-option">
          <p>.com</p>
        </div>
        <div class="search-option">
          <p>.co</p>
        </div>
        <div class="search-option">
          <p>.net</p>
        </div>
        <div class="search-option">
          <p>.io</p>
        </div>
        <div class="search-option">
          <p>.co.uk</p>
        </div>
        <div class="search-option">
          <p>Reddit</p>
        </div>
        <div class="search-option">
          <p>Twitter</p>
        </div>

        <div class="search-option">
          <p>AngelList</p>
        </div>

        <div class="search-option">
          <p>Github</p>
        </div>

        <div class="search-option">
          <p>Quora</p>
        </div>

        <div class="search-option">
          <p>Telegram</p>
        </div>

        <div class="search-option">
          <p>Paypal</p>
        </div>

        <div class="search-option">
          <p>Behance</p>
        </div>

        <div class="search-option">
          <p>Etsy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #search {
    width: 100%;
    padding: 80px 0;
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
      }
    }
  }
</style>


<script>
  export default {
    props: [],
    data () {
      return {
      }
    },
  }
</script>