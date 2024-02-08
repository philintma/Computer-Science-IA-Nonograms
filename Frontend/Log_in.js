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
            alert('Profile saved successfully!');
            // Make an AJAX call to set the session variable
            $.ajax({
              url: 'set_session_variable.php',
              method: 'POST',
              data: { logged_in: true },
              success: function(response) {
                // Update the profile page based on the session state
                if (response === 'Session variable set successfully') {
                  // Update the content to show that the user is logged in
                  $('#main-menu').load('Main_menu_after_login.html', function() {
                    let mainMenuProfileNavigator = new ProfileNavigator('main-menu');
                    $('#main-menu').on('click', '#goToNonogramSolving', goToNonogramSolving);
                    let mainMenuJapaneseFactShower = new JapaneseFactShower('main-menu');
                    goToProfileFromLogIn("profile-creation");
                  });
                  // $('#nonogram-solving').load('Nonogram_solving_after_login.html', function() {
                    // let nonogramSolvingProfileNavigator = new ProfileNavigator('nonogram-solving');
                    // let nonogramSolvingMenuNavigator = new MainMenuNavigator('nonogram-solving');
                    // let nonogramSolvingJapaneseFactShower = new JapaneseFactShower('nonogram-solving');
                    // goToProfileFromLogIn("profile-creation");
                  // });
                } else {
                  // Handle the case where the session variable was not updated successfully
                  console.error('Failed to update session variable');
                }
              },
              error: function() {
                // Handle any errors that occur during the AJAX call
                console.error('Failed to make AJAX call');
              }
            });
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

  