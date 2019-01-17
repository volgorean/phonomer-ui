<template>
	<div id="domain-list" class="content">
	  <div class="domain" v-for="w in words">
	    <div class="flexi-c r">
	      <div class="flexi-i">
	        <p class="domain-title">{{w.word}}</p>
	        <p class="domain-parts">{{w.parts.join("-")}}</p>
	      </div>
	      
	      <img class="star" src="~images/star.svg" :class="{active: state.saved.some(s=> s.word==w.word)}" @click="$s.toggleSaved(w)">
	    </div>

	    <p class="domain-tlds" v-if="state.tlds.length > 0">
	    	<template v-for="t in state.tlds">
	    		<span v-if="w.tlds===undefined || w.tlds[t.key] === undefined" class="domain-tld">
	    			<span class="spin"><img src="~images/spinner.svg"></span>
	    			{{t.name}}
	    		</span>

	    		<a v-else-if="w.tlds[t.key]===true && affiliated(t.key)" class="domain-tld buy" :href="affiliateLink(w, t)" target="_blank">
	    			{{t.name}}
	    			<span><img src="~images/arrow.svg"></span>
	    		</a>

	    		<span v-else-if="w.tlds[t.key]===true" class="domain-tld">
	    			{{t.name}}
	    		</span>

	    		<span v-else class="domain-tld unavailable">
	    			{{t.name}}
	    		</span>
	    	</template>
	    </p>
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	#domain-list {
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

	        &.loading {
	          opacity: 0.95;
	        }
	        &.unavailable {
	        	opacity: 0.75;
	        	text-decoration: line-through;
	        }
	        .spin {
	          display: inline-block;
	          animation: spin 1s infinite linear;

	          @keyframes spin {
	            from {transform:rotate(0deg);}
	            to {transform:rotate(360deg);}
	          }
	        }
	        img {
	          // top: 1px;
	          display: inline-block;
	          height: 10px;
	        }
	      }
	    }
	  }
	}
</style>

<script>
	import checker from "../checker.js"

  export default {
    props: ["words"],
    data () {
      return {
        state: this.$d,
      }
    },
    methods: {
    	affiliated(tld) {
    		return ["com", "co", "net", "org", "us", "couk", "ca", "it", "in", "me", "tv", "sh", "io", "ai"].includes(tld)
    	},
    	affiliateLink: function(w, tld) {
    		// https://www.namecheap.com/domains/registration/results.aspx?domain=test.com
    		return "http://www.tkqlhce.com/fh77kjspjr6FGEFGCC688B9DCBC/domains/registration/results.aspx?domain="+w.word+tld.name
    	},
      checkTlds: function() {
        this.words.forEach(w=> {
          if (w.tlds===undefined) {
          	this.$set(w, "tlds", {})
          }
          
          this.$data.state.tlds.forEach(tld=> {
            if (w.tlds[tld.name]===undefined) {
              checker.check(w.word, tld.key).then(val=> {
              	this.$set(w.tlds, tld.key, val)
              })
            }
          })
        })
      },
    },
    watch: {
    	"words": {
    		handler: "checkTlds",
    		immediate: true,
    	},
      "$d.tlds": {
        handler: "checkTlds",
        immediate: false,
      }
    }
  }
</script>