function SignUp() {
    let userdiv = document.getElementById("uNameDetail");
    let username = Cookies.get("username");
    userdiv.innerHTML = "You are logged in as " + username;
}
