<?php
    require_once 'connect.php';
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['uplist'];

    $product = $data['product'];
    $id = $data['id'];
    
    $result1 = $mysql->query("UPDATE `list` SET `product` = '$product' WHERE `list_id` = '$id'");
    if(!$result1)
    {
        die("Змінення продукту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        die("Продукт успішно змінений");
        $mysql->close();
    
        exit();
        
    }
    $mysql->close();

    exit();

?>