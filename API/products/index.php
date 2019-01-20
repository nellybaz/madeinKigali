<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../functions/functions.php");

if($token = "mik9876543210"){
   switch ($tag){
        case "flashdeals":
            if(flash_deals() == 1){
                $data = array("res:1", "data: $RES");

                echo json_encode($data);
            }

            else{
                $data = array("res:0");

                echo json_encode($data);
            }


        case "trending":
            if(trending() == 1){
                $data = array("res:1", "data: $RES");

                echo json_encode($data);
            }

            else{
                $data = array("res:0");

                echo json_encode($data);
            }


       case "search":
            if(search() == 1){
                $data = array("res:1", "data: $RES");

                echo json_encode($data);
            }

            else{
                $data = array("res:0");

                echo json_encode($data);
            }


       case "single_product":
            if(single_product() == 1){
                $data = array("res:1", "data: $RES");

                echo json_encode($data);
            }

            else{
                $data = array("res:0");

                echo json_encode($data);
            }



            case "add_product":
            if(add_product() == 1){
                $data = array("res:1");

                echo json_encode($data);
            }

            else{
                $data = array("res:0");

                echo json_encode($data);
            }

       }
}