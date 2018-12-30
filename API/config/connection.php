<?php

$SERVER_NAME = "localhost";
$USER_NAME = "developer1mik";
$PASSWORD = "developer1@madeinkigali";
$DATABASE_NAME = "madeinkigali";
$con = mysqli_connect($SERVER_NAME, $USER_NAME, $PASSWORD, $DATABASE_NAME);

if(!$con){
    die("sconnection failed: ". $con->connect_error );
}


