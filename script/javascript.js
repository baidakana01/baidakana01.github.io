var emaildiv = document.getElementById("email")
var passworddiv = document.getElementById("password")
var passwordconfirmdiv = document.getElementById("passwordconfirm")

function checkinput(){
	var email = document.getElementById("email").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var password = document.getElementById("password").value;
	var passwordconfirm = document.getElementById("passwordconfirm").value;
	var submittion = 1;
	var submittion2 = 1;
	if (/\w+(@gmail.com|@mail.ru|@yahoo.com|@yandex.kz)/.test(email)) {
		emaildiv.classList.remove("is-invalid");
		emaildiv.classList.add("is-valid");
	}
	else{
		emaildiv.classList.remove("is-valid");
		emaildiv.classList.add("is-invalid");
		submittion = 0;
	}
	if (/[0-9a-zA-Z](?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&]){8,}/gm.test(password)) {
		passworddiv.classList.remove("is-invalid");
		passworddiv.classList.add("is-valid");
	}
	else{
		passworddiv.classList.remove("is-valid");
		passworddiv.classList.add("is-invalid");
		submittion2 = 0;
	}
	if (password == passwordconfirm && submittion2 == 1) {
		passwordconfirmdiv.classList.remove("is-invalid");
		passwordconfirmdiv.classList.add("is-valid");
	}
	else{
		passwordconfirmdiv.classList.remove("is-valid");
		passwordconfirmdiv.classList.add("is-invalid");
		submittion = 0;
	}
	if(submittion == 1 && submittion2 ==1){
		var http = new XMLHttpRequest();
		http.open("POST", 'https://my-json-server.typicode.com/TestyEldrich/mockjson/users', true);
		var new_obj = {
			"id" : 1,
			"email" : email,
			"firstname" : firstname,
			"lastname" : lastname,
			"password" : password
		}
		var myJSON = JSON.stringify(new_obj);
		console.log(new_obj);
		http.send(myJSON);
	}
}