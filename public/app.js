var app = new Vue({
	el: '#vue',
	data: {
		resume: false
	},
	methods: {
		showResume: function(){
			if(!this.resume){
				this.resume = true
			} else if (this.resume){
				this.resume = false
			} 

		}
	}
})