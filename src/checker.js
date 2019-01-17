var sources = {
	reddit(word) {
		return new Promise((resolve, reject) => {
			fetch("https://api.reddit.com/api/username_available.json?user="+word)
			.then(res => res.json())
			.then(data=> {
			  resolve(data) //reddit just returns a bool
			})
			.catch(err=> {
			  resolve(false)
			})
		})
	},
	github(word) {
		return new Promise((resolve, reject) => {
			fetch("https://api.github.com/users/"+word)
			.then(res => res.json())
			.then(data=> {
			  resolve(data.id === undefined)
			})
			.catch(err=> {
			  resolve(false)
			})
		})
	},
	default(word, kind) {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/available/${kind}/${word}`)
			.then(res => res.json())
			.then(data=> {
			  resolve(data.available)
			})
			.catch(err=> {
			  resolve(false)
			})
		})
	}
}

var b = {
	backlog: [],
	working: 0,
	max: 4,
	check(word, tld) {
		return new Promise((resolve, reject) => {
			b.backlog.push({resolve, reject, word, tld})
			setTimeout(b.work, 0)
		})
	},
	work() {
		if (b.backlog.length>0 && b.working<b.max) {
			let current = b.backlog.shift()
			b.working++

			(sources[current.tld] || sources.default)(current.word, current.tld).then((result)=> {
				current.resolve(result)
				b.working--
				b.work()
			})
		}
	},
}
export default b