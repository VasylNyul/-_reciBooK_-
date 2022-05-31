<?php
    require_once 'connect.php';

    $customer_id = $_SESSION['customer_id'];
    
    $result2 = $mysql->query("SELECT * FROM `list` WHERE`customer_id` = '$customer_id'");
    $list = $result2->fetch_assoc();
        //$_SESSION['list_id'] = $list['list_id'];
    $product = $list['product'];

    die(json_encode(['product' => $product]));
    $mysql->close();
    
    exit();
        
?>