"use strict";
function quizLoad() {
    console.log("Invoked quizLoad() ");
}

function myFunction() {


    let dataHTML = "";

    for (let item of myJSONArray) {
        dataHTML += "<tr><td>" + item.name + "</td><td>" + item.published + "</td><td> <button class='alertItemName' data-saleID='" + item.sales + "' data-itemID='" + item.name + "'>Click Me</button></td></tr>";
    }
    document.getElementById("gameWithButtons").innerHTML += dataHTML;

    document.addEventListener("click", function (event) {
        if (event.target.matches('.alertItemName')) {
            let itemName = event.target.getAttribute("data-itemID");
            let saleName = event.target.getAttribute("data-saleID");
            let userName = document.getElementById("FirstName").value;
            let lastName = document.getElementById("LastName").value;

            if ((userName || lastName) === "") {
                alert("Welcome" + ", you clicked on " + itemName + "and the total sales were " + saleName);
            } else {
                alert("Welcome " + userName + " " + lastName + ", you clicked on " + itemName + "and the total sales were " + saleName);
            }
        }
    });
}