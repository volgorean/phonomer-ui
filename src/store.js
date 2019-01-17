var store = {
	fetchKey(key, defaultVal) {
		let out = {}

		try {
			let c = localStorage.getItem(key)
			out = JSON.parse(c)
		} finally {
			return out || defaultVal
		}
	},
	toggleTld(val) {
		if (store.state.tlds.some(x=> x.key === val.key)) {
			store.state.tlds = store.state.tlds.filter(tld=> tld.key !== val.key)
		} else {
			store.state.tlds.push(val)
		}
		localStorage.setItem("tlds", JSON.stringify(this.state.tlds))
	},
	toggleSaved(val) {
		var found = false
		
		this.state.saved.forEach((s, i, obj)=> {
			if (s.word == val.word) {
				obj.splice(i, 1)
				found = true
			}
		})

		if (!found) {
			this.state.saved.push(val)
		}
		localStorage.setItem("savedWords", JSON.stringify(this.state.saved))
	},
	saveSaved() {
		localStorage.setItem("savedWords", JSON.stringify(this.state.saved))
	}
}
store.state = {
	saved: store.fetchKey("savedWords", []),
	tlds: store.fetchKey("tlds", []),
}
export default store