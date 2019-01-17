<template>
	<nav :class="{'nav-bg': background}">
		<div class="flexi-c r content">
			<a href="/" id="logo">Markov_Name</a>
			<!-- <a href="https://zakali.co" id="author">by Zakali.co</a> -->
      <a href="/saved" id="saved" class="flexi-c r">
        <span>{{ state.saved.length }}</span>
        <img class="star" src="~images/star.svg">
      </a>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
  nav {
  	height: 60px;
  	padding: 10px 0;

  	#logo {
  		flex: 0 0;
  		margin-right: 20px;
  		font: 700 28px/40px 'Hind Vadodara', sans-serif;
      color: white
  	}
  	#author {
  		flex: 0 0;
  		margin-left: auto;
  		font: 500 14px/40px 'Hind Vadodara', sans-serif;
  		white-space: nowrap;
  		color: white;
  	}
    #saved {
      height: 30px;
      flex: 0 0;
      margin-top: 5px;
      margin-left: auto;
      padding: 6px 10px;
      padding-left: 15px;
      border-radius: 50px;
      box-shadow: 0 2px 4px rgba(0,0,0,.3);
      background: white;

      span {
        top: 1px;
        flex: 0 0;
        white-space: nowrap;
        font: 500 14px/18px 'Hind Vadodara', sans-serif;
        color: #222222;
      }
      .star {
        flex: 0 0;
        height: 18px;
        margin-left: 10px;
      }
    }
    &.nav-bg {
      background: #6F1E51;
    }
  }
</style>

<script>
  export default {
    props: [
      "background"
    ],
    data () {
      return {
        state: this.$d,
      }
    },
  }
</script>