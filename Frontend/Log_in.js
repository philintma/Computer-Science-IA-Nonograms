function logIntoProfile() {
  var username = document.getElementById("logInUsernameInput").value;
  var password = document.getElementById("logInPasswordInput").value;

  var hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
  console.log("assigned variables")

  if (username && password && password.length >= 5) { 
    console.log("username, password received");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Log_in_with_database.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.status);
        if (xhr.status === 200) {
          if (xhr.responseText === "PHP: Username and password are valid") {
            alert("Logged in successfully!");
                goToProfileFromLogIn("profile-creation"); // Assuming mainMenuProfileNavigator is accessible here --- надо поменять на рабочее
          } else if (xhr.responseText === "PHP: Invalid username or password") {
            alert('Your username or password is incorrect');
          } else {
            alert('Unexpected response from server');
          }
        } else {
          alert('Error: ' + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify({ username: username, password: hashedPassword }));
    console.log("sent json string ",  JSON.stringify({ username: username, password: hashedPassword }))
  }
   else if (password.length == 0 || username.length == 0){
    alert('Please provide a username and password');
    console.log("No username and password received!");
  }
  else if (password.length < 5) {
    alert('Password should be 5 characters or longer.');
    console.log("Password length is less than 5 characters!");
  } 
}

  