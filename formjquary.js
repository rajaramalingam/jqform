$(document).ready(function () {	
	$("#logIn").validate({
		rules: {
			firstname:{
				required:true,
				minlength: 3
			},
			lastname:{
			required:true,
			minlength:3
			},
			genderinput:{
				required:true 
			},
			addressinput:{
				required:true
			},
			stateinput:{
				required:true
			},
			countryinput:{
				required:true
			},
			mobileinput:{
				required:true
			},
			password:{
				required:true,
				minlength: 5 
			},
			confirmpassword:{
				required:true,
				minlength: 5, 
				equalTo:"#pswrd"
			},
			email:{
				required: true,
				email: true
			},
		},
			messages: {
			firstname: {
				minlength: "your name must have 4 words"
			},
			lastname: {
				minlength: "your name must have 4 words"
			},
			addressinput: {
				required: "enter the column"
			},
			genderinput: {
				required: "enter the column"
			},
			stateinput: {
				required: "enter the column"
			},
			countryinput: {
				required: "enter the column"
			},
			mobileinput: {
				required: "enter the valid number"
			},
			
			password: {
					required:"please enter the column",
					minlength: "your password must have 4 words"
			},
			comfirmpassword: {
				required:"please enter the column",
				minlength: "please enter the above password",	
			    equalTo:"your password mismatch"
			},
		},
		sumbitHandler: function(form){
			return false;
		}	
	});
});
