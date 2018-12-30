<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../functions/functions.php");
$res = "";

if(isset($_POST['token']) == "mik9876543210")
    {
        $tag = $_POST["tag"];
        
        if($tag == "login")
            
            {   
                $email = $_POST['email'];
                $pass = $_POST['password'];            
            
                if(login($email, $pass) == 1)
                    {
                        $res = array("res"=> 1);
                        echo json_encode($res);
                    }

                else
                    {
                        $res = array("res"=> 0);
                        echo json_encode($res);
                    }
            }

        else if($tag == "register"){
            echo Json_encode($_POST['password']);
        }

    }

else
    {

    echo json_encode($res);

    }