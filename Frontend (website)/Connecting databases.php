<?php

namespace nombredeproyecto;

class Contact{
    protected $db_host = "localhost";
    protected $db_user = "root";
    protected $db_pass = "root";
    
    $servername = "localhost";
    $database = "nonograms"; #nombre de bbdd de PHPmyadmin
    $username = "username";
    $password = "";

    $conexion = new mysqli($servername, $username, $password, $database)

    if ($conexion -> connection_errno){
        die("Conexion Fallida", $conexion -> connection_errno);
    }else{
        echo"Conectado"; #print function in php
    }
}
?>
#include "connect error" case