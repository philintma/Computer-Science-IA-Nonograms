function validateAndSaveProfile() {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  var repeatPassword = document.getElementById("repeatPasswordInput").value;

  var hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
  console.log("assigned variables")

  if (username && password && repeatPassword && password.length >= 5 && password === repeatPassword) {
    console.log("username, password received");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Profile_to_database.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.status);
        if (xhr.status === 200) {
          if (xhr.responseText === "PHP: Profile saved successfully!") {
            alert('Profile saved successfully!');
            // Make an AJAX call to set the session variable
            $.ajax({
              url: 'set_session_variable.php',
              method: 'POST',
              data: { logged_in: true },
            });

            goToProfileFromLogIn("profile-creation"); 
          } else if (xhr.responseText === "PHP: Error saving profile") {
            alert('Error saving profile');
          } else if (xhr.responseText === "PHP: Username taken") {
            alert('This username is already taken. Please choose another one');
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
   else if (password.length < 5) {
    alert('Password should be 5 characters or longer.');
    console.log("Password length is less than 5 characters!");
  } else if (password !== repeatPassword) {
    alert('Passwords do not match. Please repeat the password correctly.');
    console.log("Passwords do not match!");
  } else {
    alert('Please provide a username and password');
    console.log("No username and password received!");
  }
}

  