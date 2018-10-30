<html>

<form method="POST" action="index.php">
<!-- WRITE ALL REQUEST JSON EXAMPLES HERE. -->
<strong> NOTE: Copy the json strings and insert into the text box below. </strong><br /><br />
<strong>What this Does is, it sends a $_POST['request'] containing one of these JSONs to index.php. </strong><br /><br />
<strong> Test: </strong>{"tag":"test"}<br />
<strong>Create Blog: </strong>{"tag":"create_blog", "article_name":"", "article_post":"", "category":""}<br />
<strong>Save Billing Addres: </strong>{"tag":"save_billing_address", "user_id":"", "address_line":"", "city":"", "country":""}<br />
<strong>Add to cart: </strong>{"tag":"add_cart", "user_id":"", "product_id":""}<br />
<strong>Add Flash Deals: </strong>{"tag":"add_flash_deals", "product_id":"", "date_time_due":""}<br />
<strong>Add Trending: </strong>{"tag":"add_trending", "product_id":""}<br />
<strong>Add Wishlist: </strong>{"tag":"add_wishlist", "product_id":"", "user_id":""}<br />
<strong>Get Flash Deals: </strong>{"tag":"get_flash"}<br />
<strong>Get Blog(s): </strong>{"tag":"get_blog", "article_no": ""}<br />
<strong>Get Carts: </strong>{"tag":"get_cart", "user_id": ""}<br />
<strong>Get Trending: </strong>{"tag":"get_trending"}<br />
<strong>Get Wishlist: </strong>{"tag":"get_wishlist", "user_id": ""}<br />

<!-- #################################### -->

<br />
<br />
<textarea name="request" rows="5" style="width:50%"></textarea><br />
<button type="submit">Test</button>

</form>

<html>