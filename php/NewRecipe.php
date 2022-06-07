<?php

require_once 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$data = $data['Recipe1'];

if (!isset($data['title'])) {
    die('Enter title');
}
if (!isset($data['instructions'])) {
    die('Enter instructions');
}
if (!isset($data['ingredients'])) {
    die('Enter ingredients');
}
if (!isset($data['img'])) {
    die('Enter img');
}
$recipe_name = $data['title'];
$instructions = $data['instructions'];
$ingredients = $data['ingredients'];
$photo = $data['img'];
$customer_id = $_SESSION['customer_id'];


$ingr = json_encode($ingredients, JSON_UNESCAPED_UNICODE);
$mysql->query("INSERT INTO `recipe`( `recipe_name`, `photo`, `ingredients`, `instruction`, `customer_id`) 
VALUES ('$recipe_name','$photo','$ingr','$instructions', '$customer_id')");

$result1 = $mysql->query("SELECT * FROM `recipe` WHERE `recipe_name` = '$recipe_name' AND `customer_id` = '$customer_id' AND `instruction` = '$instructions' ");
$recipe = $result1->fetch_assoc();
$recipe_id = $recipe['recipe_id'];

$mysql->close();
exit();

?>