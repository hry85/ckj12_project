function check() {
	var password = document.getElementById("password").value
	var confirm = document.getElementById("confirm-password").value
	var msg = document.getElementById("msg")

	if (password != confirm) {
		msg.innerText = "Password doesn't match!"
		msg.style = "color: red;"
		return false
	} else {
		msg.innerText = "Password matches!"
		msg.style = "color: green;"
	}
	return true
}
function showPasswords() {
	var password = document.getElementById("password")
	var confirm = document.getElementById("confirm-password")
	if (password.type === "password") {
		password.type = "text"
		confirm.type = "text"
	} else {
		password.type = "password"
		confirm.type = "password"
	}
}