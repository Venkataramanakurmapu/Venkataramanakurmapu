//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.


var login_success = false; /* set this to true if the login was a success */



function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ((username == "DORA" && password == "DORA")||(username == "admin" && password == "admin")||(username == "JYOTHI" && password == "JYOTHI")||(username == "MOUNIKA" && password == "MOUNIKA")||(username == "PRASAD" && password == "PRASAD")||(username == "Venkki" && password == "Venkki")||(username == "HEMANTH" && password == "HEMANTH")||(username == "SIREESHA" && password == "SIREESHA")||(username == "PAVANTEJA" && password == "PAVANTEJA")) {
    login_success = true;
  }
  
  if (login_success == false)
  {
    document.getElementById("login_failed").innerHTML = "Login Failed.";
  }
  else {
    
   window.location = "../generic.html"; // Redirecting to other page..
   }
  }