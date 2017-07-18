var funky = new Vue({
	el: "#app",
	data: {
		hideResume: true
	},
	methods: {
		showResume: function(){
			console.log("hide")
			if(!hideResume){
				Hideesume = true
				return
			} else if (hideResume){
				hideResume = false
				return
			} 

		}
	}
})