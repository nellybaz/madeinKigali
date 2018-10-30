<?php

require_once 'config.php';
require_once 'Model.php';
DEFINE("IMG_PATH", dirname(dirname(__FILE__))."/images/");

class Engine extends Model {
	
	// ---------------------------------------------------------------------------------------------------------------------------- //
	// TAG METHODS GO UNDER THIS.
	// ---------------------------------------------------------------------------------------------------------------------------- //

	//Test method to return JSON string.
	function test($arr=[]) {
		return parent::feedback("This is a test result", 1); //Success.
	}

	//Method to flash deals
	function get_flash($post=[]) {
		/*
			{"tag":"get_flash"}
		*/
		$feedback = parent::read(
			["flash_deals as f", "products as p", "product_images as p_i"], 
			["f.product_id", "product_brand", "product_price", "img1", "img2", "img3", "img4", "img5", "img6", "img7"], 
			"f.product_id = p.product_id and f.product_id = p_i.product_id"
		);
		return $feedback;
	}

	//Method to get all blog
	function get_blog($post=[]) {
		/*
			{"tag":"get_blog", "article_no": ""}
		*/
		$article_no = parent::get($post, "article_no");
		if ($article_no == "") $where = "1";
		else $where = "article_no = $article_no";
		$feedback = parent::read(
			["blog"], 
			["*"], 
			$where, "ORDER BY article_no"
		);
		return $feedback;
	}

	//Method to get carts
	function get_cart($post=[]) {
		/*
			{"tag":"get_cart", "user_id": ""}
		*/
		$user_id = parent::get($post, "user_id");
		
		$errorMsg = [];
		if ($user_id == "") $errorMsg[] = "Invalid user session. Please login and try again later";

		if (empty($errorMsg)) {
			$feedback = parent::read(
				["cart as c", "products as p", "product_images as p_i"],  
				["c.product_id", "img1", "product_price", "SUM(product_price) as Total"], 
				"c.product_id = p.product_id and c.product_id = p_i.product_id and user_id = $user_id",
				"ORDER BY product_id"
			);
		} else {
			$feedback = parent::feedback(implode('\n', $errorMsg));
		}	
		return $feedback;
	}
	
	//Method to get trending
	function get_trending($post=[]) {
		/*
			{"tag":"get_trending"}
		*/
		$feedback = parent::read(
			["trending", "products"], 
			["*"], 
			"trending.product_id = products.product_id"
		);
		return $feedback;
	}
	// SELECT * FROM  WHERE user_id = 1 and w.product_id = p.product_id = p_i.product_id
	//Method to get wishlist
	function get_wishlist($post=[]) {
		/*
			{"tag":"get_wishlist", "user_id": ""}
		*/
		$user_id = parent::get($post, "user_id");
		
		$errorMsg = [];
		if ($user_id == "") $errorMsg[] = "Invalid user session. Please login and try again later";

		if (empty($errorMsg)) {
			$feedback = parent::read(
				["wishlist as w", "products as p", "product_images as p_i"],  
				["*"], 
				"user_id = $user_id and w.product_id = p.product_id = p_i.product_id",
				"ORDER BY w.product_id"
			);
		} else {
			$feedback = parent::feedback(implode('\n', $errorMsg));
		}	
		return $feedback;
	}
	// Method to save billing address
	function save_billing_address($post=[]) {
		/*
			{"tag":"save_billing_address", "user_id":"", "address_line":"", "city":"", "country":""}
		*/
		$user_id = parent::get($post, "user_id");
		$address_line = parent::get($post, "address_line");
		$city = parent::get($post, "city");
		$country = parent::get($post, "country");

		$errorMsg = [];
		if ($user_id == "") $errorMsg[] = "User ID cannot be empty.";
		if ($address_line == "") $errorMsg[] = "Address line cannot be empty.";
		if ($city == "") $errorMsg[] = "City cannot be empty.";
		if ($country == "") $errorMsg[] = "Country cannot be empty.";

		if (empty($errorMsg)) {
			$ins = parent::create("billing_address", [
				"user_id" => $user_id, 
				"address_line" => $address_line, 
				"city" => $city,
				"country" => $country
			], "isss");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}

	// Method to create a new blog post
	function create_blog($post=[]) {
		/*
			{"tag":"create_blog", "article_name":"", "article_post":"", "category":""}
		*/
		$article_name = parent::get($post, "article_name");
		$article_post = parent::get($post, "article_post");
		$category = parent::get($post, "category");

		$errorMsg = [];
		if ($article_name == "") $errorMsg[] = "Article name cannot be empty.";
		if ($article_post == "") $errorMsg[] = "Article post cannot be empty.";
		if ($category == "") $errorMsg[] = "Category value cannot be null.";

		if (empty($errorMsg)) {
			$ins = parent::create("blog", [
				"article_name" => $article_name, 
				"article_post" => $article_post, 
				"category" => $category
			], "sss");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}

	// Method to add cart
	function add_cart($post=[]) {
		/*
			{"tag":"add_cart", "user_id":"", "product_id":""}
		*/
		$user_id = parent::get($post, "user_id");
		$product_id = parent::get($post, "product_id");

		$errorMsg = [];
		if ($user_id == "") $errorMsg[] = "User ID cannot be empty.";
		if ($product_id == "") $errorMsg[] = "Address line cannot be empty.";

		if (empty($errorMsg)) {
			$ins = parent::create("cart", [
				"user_id" => $user_id, 
				"product_id" => $product_id
			], "ii");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}

	// Method to add flash deals
	function add_flash_deals($post=[]) {
		/*
			{"tag":"add_flash_deals", "product_id":"", "date_time_due":""}
		*/
		$product_id = parent::get($post, "product_id");
		$date_time_due = parent::get($post, "date_time_due");

		$errorMsg = [];
		if ($product_id == "") $errorMsg[] = "Product ID cannot be empty.";
		if ($date_time_due == "") $errorMsg[] = "Due time cannot be empty.";

		if (empty($errorMsg)) {
			$ins = parent::create("flash_deals", [
				"product_id" => $product_id, 
				"date_time_due" => $date_time_due
			], "is");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}

	// Method to add trending
	function add_trending($post=[]) {
		/*
			{"tag":"add_trending", "product_id":""}
		*/
		$product_id = parent::get($post, "product_id");

		$errorMsg = [];
		if ($product_id == "") $errorMsg[] = "Product ID cannot be empty.";

		if (empty($errorMsg)) {
			$ins = parent::create("trending", [
				"product_id" => $product_id
			], "i");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}

	// Method to add wishlist
	function add_wishlist($post=[]) {
		/*
			{"tag":"add_wishlist", "user_id":"", "product_id":""}
		*/
		$user_id = parent::get($post, "user_id");
		$product_id = parent::get($post, "product_id");

		$errorMsg = [];
		if ($user_id == "") $errorMsg[] = "User ID cannot be empty.";
		if ($product_id == "") $errorMsg[] = "Address line cannot be empty.";

		if (empty($errorMsg)) {
			$ins = parent::create("wishlist", [
				"user_id" => $user_id, 
				"product_id" => $product_id
			], "ii");
			if ($ins > 0) {
				$feedback = parent::feedback("Created successfully", 1);
			} else {
				$feedback = parent::feedback("An Error occured");
			}
		} else {
			$feedback = parent::feedback(implode("\n", $errorMsg));
		}
		return $feedback;
	}


	//Method to get picture
	function get_pic_str($post=[]) {
		/*
			{"tag":"get_pic_str", "pic_link":""}
		*/
		$pic_link = parent::get($post, "pic_link");
		//Check if file exist
		$pic_link = IMG_PATH.$pic_link;
		if (file_exists($pic_link)) {
			$pictureFile = fopen($pic_link, "r");
			$picStr = base64_encode(file_get_contents($pic_link));

			$feedback['flag'] = 1;
			$feedback['pic_str'] = $picStr;
		} else {
			$feedback = parent::feedback("file does not exist");
		}
		return $feedback;
	}

}