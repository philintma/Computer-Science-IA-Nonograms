<?php
session_start();
$_SESSION['logged_in'] = false;
?> 

<!DOCTYPE html>
<html>
<head>
  <title>Nonograms website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  
<?php
      // $_SESSION['logged_in'] = false;
      // session_start();
      include "Main_menu.php";
      include "Profile.php";
      include "Nonogram_solving.php";
      include "Profile_creation.php";      
    ?>

</body>

<!-- not sure whether i need type = module in each script, i'll put it like this for now -->
<script src="Website creation.js" defer></script> 
<script src="Save nonogram dimensions.js" defer></script>
<script src="Profile_creation.js" defer></script>
<script src="Log_in.js" defer></script>
<script src="Canvas_and_squares.js" defer></script>
<script src="Filling_fields_with_numbers.js" defer></script>
<script src="Show_nonogram_solution.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>

</html>
