"use strict";

function validateForm() {
    console.log("Invoked validateForm()");
    let valid = true;

    document.getElementById("usernameValidationText").innerHTML = "";
    document.getElementById("passwordValidationText").innerHTML = ""; //clear these so if form validated again, messages


    if (document.getElementById("username").value === "") {
        document.getElementById("usernameValidationText").innerHTML = "Please enter your username.";
        valid = false;
    }

    if (!document.getElementById("password").checkValidity()) {
        document.getElementById("passwordValidationText").innerHTML = "";
        valid = false;
    }

    if (valid === true) {
        postUserLogin()
    }

}


function postUserLogin() {
    console.log("Invoked postUserLogin() ");

    var url = "/account/login";
    var formData = new FormData(document.getElementById('login'));

    fetch(url, {
        method: "POST",
        body: formData,
    }).then(response => {
        return response.json(); //now return that promise to JSON
    }).then(response => {
        if (response.hasOwnProperty("Error")
        ) {
            alert("Username and password not recognised");
        } else {
            Cookies.set("token", response.token); //response is UUID value for session cookie
            Cookies.set("username", response.username);
            window.open("achievements.html", "_self"); //open welcome.html in same tab.
        }
    })
}

function AddUser() {
    console.log("Invoked AddUser()");
    const formData = new FormData(document.getElementById('signup'));
    let url = "/account/add";
    fetch(url, {
        method: "POST",
        body: formData,
    }).then(response => {
        return response.json()
    }).then(response => {
        if (response.hasOwnProperty("Error")) {
            alert(JSON.stringify(response));
        } else {
            window.open("/client/login.html", "_self");   //URL replaces the current page.  Create a new html file
        }                                                  //in the client folder called index.html
    });
}
