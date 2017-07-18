var app = new Vue({
	data: {
		resume: false
	},
	methods: {
		showResume: function(){
			if(!resume){
				resume = true
			} else if (resume){
				resume = false
			} 

		}
	}
})