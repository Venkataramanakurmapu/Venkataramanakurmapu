//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.


var login_success = false; /* set this to true if the login was a success */



function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Admin" && password == "Admin") {
    login_success = true;
  }
  
  if (login_success == false)
  {
    document.getElementById("login_failed").innerHTML = "Login Failed.";
  }
  else {
    
   window.location = "../generic.html"; // Redirecting to other page.
   }
  }