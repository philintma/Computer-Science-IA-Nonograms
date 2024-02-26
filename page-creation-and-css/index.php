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
      include "main-menu.php";
      include "profile.php";
      include "nonogram-solving.php";
      include "profile-creation.php";      
    ?>

</body>


<script src="../javascript-for-button-work/page-redirection-buttons.js" defer></script> 
<script src="../javascript-for-button-work/japanese-facts-buttons.js" defer></script> 
<script src="../javascript-for-profile-management/create-profile.js" defer></script>
<script src="../javascript-for-profile-management/log-in.js" defer></script>
<script src="../javascript-for-nonograms/save-nonogram-dimensions-and-call-functions.js" defer></script>
<script src="../javascript-for-nonograms/create-square-cross-dot-buttons.js" defer></script>
<script src="../javascript-for-nonograms/process-image.js" defer></script>
<script src="../javascript-for-nonograms/create-nonogram-numbers.js" defer></script>
<script src="../javascript-for-nonograms/fill-fields-with-numbers-and-call-functions.js" defer></script>
<script src="../javascript-for-nonograms/show-nonogram-solution.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script type="module" src="https://unpkg.com/jimp"></script>
<script type="module" src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</html>
