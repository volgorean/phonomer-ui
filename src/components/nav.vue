<template>
	<nav :class="{'nav-bg': background}">
		<div class="flexi-c r content">
			<a href="/" id="logo">Markov_Name</a>
			<a href="https://zakali.co" id="author">by Zakali.co</a>
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
    &.nav-bg {
      background: #6F1E51;
    }
  }
</style>

<script>
  export default {
    props: [
      "background"
    ]
  }
</script>