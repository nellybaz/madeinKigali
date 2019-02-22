<?php

//================= all functions for database interaction====================//

class Functions{    
    var $res;
    
    function __construct()
    {
    	$this->res = 0;
    }
    
    function login($email, $pass)
    {
    	$email = 'nellybaz10@gmail.com';
    	$pass = 'password';
    	include "../config/connection.php";
    	
    	$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$pass'";
    	$result  =  mysqli_query($con, $sql);
    	
    	if(mysqli_num_rows($result) > 0)
    	{
    	
    		$this->res = 1;	
    		return $this->res;
    	}
    	
    	return $this->res;
        
	}
	

	function searchProduct($query){
		
	}
}

$test = new Functions();
echo $test->res;
echo $test->login();