<?php
    require_once 'connect.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['list'];

    $product = $data['text'];
    $customer_id = $_SESSION['customer_id'];

    $result1 = $mysql->query("INSERT INTO `list` ( `product`, `customer_id` )
    VALUES( '$product','$customer_id')");

    if(!$result1)
    {
        die("Додавання продукту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        $result2 = $mysql->query("SELECT * FROM `list` WHERE `product` = '$product' AND `customer_id` = '$customer_id'");
        $list = $result2->fetch_assoc();

        $list_arr = array();
        $list_arr[$list['list_id']] = $list['product'];
        die(json_encode($list_arr));
        
        $mysql->close();
    
        exit();
        
    }
?>