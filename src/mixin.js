import Vue from 'vue'

Vue.mixin({
  methods: {
    fetchApi: function(method, endpoint, body=false) {
      var options = {
        method: method,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      }
      if (body) {
        options.body = JSON.stringify(body)
      }
      return fetch(process.env.API_HOST+endpoint, options)
        .then(async response => {
          return {
            ok: response.ok,
            status: response.status,
            body: (await response
              .json()
              .catch(err=> {
                // empty body throws error.
                return {}
              })
            )
          }
        })
        .then(response => {
          if (!response.ok) {
            throw response
          } else {
            return response.body
          }
        })
    }
  }
})