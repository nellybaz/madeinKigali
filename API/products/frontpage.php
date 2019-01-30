<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../functions/functions.php");

$token = $_POST['token'];

$tag = $_POST['tag'];

$data = [];

if($token == "mik1234567890allow"){

    switch($tag){
         // retrieve carousel images
        case "carousel":
            $query = "SELECT * FROM carousel";
            $result  = mqslqi_query($con, $query);
            $rows = mysqli_fecth_assoc($result);
            if(mysqli_num_rows($result) > 0){
                $data = ["carosuel" => [$rows]]

            }



    }
   





    //retrieve flashdeals



    //retrieve featured blogs


    //retrieve trending


    //retrieve brands


}