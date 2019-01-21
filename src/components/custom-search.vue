<template>
	<div class="search-custom">
	  <div class="search-custom-form content flexi-c">
	    <div class="search-custom-header">
	    	<div class="content flexi-c r">
	    		<p class="search-custom-title flexi-i">Custom Search</p>
	    		<p class="search-custom-submit" :style="buttonStyle" @click="customSearch">{{words.length}} / 100 Required</p>
	    	</div>
	    </div>

	    <div class="search-custom-input content flexi-c">
	    	<div class="search-custom-input-inner">
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
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	.search-custom {
	  flex: 1 0;
	  width: 100%;

	  .search-custom-form {
	    top: -70px;
	    min-height: 100%;
	    padding: 0;
	    border-radius: 5px;
	    box-shadow: 0 2px 4px rgba(0,0,0,.3);
	    overflow: hidden;
	    background: whitesmoke;
	  }

	  .search-custom-header {
	    flex: 0 0;
	    padding: 15px 0;
	    background: white;

	    .search-custom-title {
	      padding: 6px 0;
	      font: 500 24px/28px 'Hind Vadodara', sans-serif;
	      white-space: nowrap;
	    }
	    .search-custom-submit {
	      flex: 0 0;
	      padding: 6px 20px;
	      border-radius: 3px;
	      font: 500 16px/28px 'Hind Vadodara', sans-serif;
	      white-space: nowrap;
	      background: lightgray;
	      cursor: pointer;

	      &.valid {
	      	background: #2ecc71;
	      }
	    }
	  }
	  .search-custom-input {
	    flex: 1 0;
	    width: 100%;
	    min-height: 300px;


	    .search-custom-input-inner {
        flex: 1 1;
	    	width: 100%;
	    }

	    .search-custom-input-placeholder {
	      position: absolute;
	      top: 20px;
	      left: 0;
	      color: silver;
	      font: 500 14px/18px 'Hind Vadodara', sans-serif;
	    }
	    textarea {
        position: absolute;
	      width: 100%;
	      height: 100%;
	      padding-top: 20px;
	      border: none;
	      background: transparent;
	      font: 500 14px/18px 'Hind Vadodara', sans-serif;
        outline: none;
	      resize: none;
	    }
	  }
	}
</style>

<script>
  export default {
    data () {
      return {
        custom: ""
      }
    },
    computed: {
      words: function() {
        return this.$data.custom.split(/\r\n+|\n+|\r+|\s+|,+|\.+/).filter(e => e)
      },
      buttonStyle: function() {
      	return {
      		background: `rgba(46, 204, 113, ${this.words.length/100})`,
      	}
      }
    },
    methods: {
      customSearch: function() {
        if (this.words.length > 0) {
          this.$router.push("/search/?search="+this.words.join)
        }
      },
      customGenerator: function() {
      	if (this.words.length < 100) {
      		return
      	}

        this.fetchApi("POST", "/generate/", {words: this.words})
        .then(data=> {
          this.$router.push("/generate/"+data.id)
        })
        .catch(err=> {
          console.log(err)
        })
      },
    },
  }
</script>