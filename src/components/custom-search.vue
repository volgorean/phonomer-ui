<template>
	<div class="search-custom">
	  <div class="search-custom-form content flexi-c">
	    <div class="search-custom-header">
	    	<div class="content flexi-c r">
          <div class="custom-search-type">
            <select v-model="type" @change="input=''">
              <option value="search">Custom Search</option>
              <option value="generate">Custom Generator</option>
            </select>
          </div>

          <div class="custom-search-preset" v-if="type=='search'">
            <select v-model="preset">
              <option value="english">English</option>
              <option value="latin">Latin</option>
              <option value="japanese">Japanese</option>
              <option value="german">German</option>
            </select>
          </div>

          <p class="search-custom-submit" :style="buttonStyle" @click="customGenerator" v-if="type=='generate'">{{words.length}} / 100 Required</p>
          <p class="search-custom-submit" @click="customSearch" v-else>Submit</p>
	    	</div>
	    </div>

	    <div class="search-custom-input content flexi-c">
	    	<div class="search-custom-input-inner">
	    	  <p class="search-custom-input-placeholder" v-if="input.length==0">
            <template v-if="type=='search'">
            Enter some base words to start your search.<br>
            </template>
            <template v-else>
            Enter at least 100 words from which to generate.<br>
            </template>
	    	    Words can be seperated by a newline, comma, or period character.<br>
	    	    <br>
	    	    Example:<br>
	    	    Super<br>
	    	    Duper<br>
	    	    Alpha<br>
	    	    Manager<br>
	    	  </p>
	    	  <textarea v-model="input"></textarea>
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

      select {
        width: 100%;
        border: none;
        background: transparent;
        white-space: nowrap;
      }

      .custom-search-type {
        flex: 0 0 auto;

        select {
          // padding: 6px 0;
          font: 500 24px/28px 'Hind Vadodara', sans-serif;
        }
      }
      .custom-search-preset {
        flex: 0 0 auto;
        
        select {
          padding-left: 20px;
          font: 500 24px/28px 'Hind Vadodara', sans-serif;
        }
      }
	    .search-custom-submit {
	      flex: 0 0;
        margin-left: auto;
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
        type: "search",
        preset: "english",
        input: "",
      }
    },
    computed: {
      words: function() {
        return this.$data.input.split(/\r\n+|\n+|\r+|\s+|,+|\.+/).filter(e => e)
      },
      buttonStyle: function() {
        let [r, g, b] = this.rgbTransition(
          236, 240, 241,
          46, 204, 113,
          Math.min(this.words.length/100, 1)
        )

      	return {
      		background: `rgb(${r}, ${g}, ${b})`,
      	}
      }
    },
    methods: {
      customSearch: function() {
        if (this.words.length > 0) {
          this.$router.push(`/generate/${this.$data.preset}/?search=${this.words.join(",")}`)
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
      rgbTransition: function(fromR, fromG, fromB, toR, toG, toB, percent) {
        let rDelta = fromR - toR
        let gDelta = fromG - toG
        let bDelta = fromB - toB
        return [
          (fromR-(rDelta*percent)).toFixed(),
          (fromG-(gDelta*percent)).toFixed(),
          (fromB-(bDelta*percent)).toFixed()
        ]
      }
    },
  }
</script>