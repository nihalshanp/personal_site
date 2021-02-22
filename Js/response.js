// contact form submit to get values to my google sheet
$("#submit-form").submit((e)=> {
	e.preventDefault()
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbzdOIW2UgolB19ioKQTlBZ_jASDc_CssEhXMY4/exec",
		data: $("#submit-form").serialize(),
		method: "post",
		success: function (response) {
			swal({
				title: "Form submitted",
				text: "Thanks, for your response. Sorry, I'll not respond to you,",
				icon: "success",
				button: "ok",
			});
		},
		error: function (err) {
			swal({
				title: "Error",
				text: "Someting error",
				icon: "error",
				button: "Try again"
			})
		}
	})
})