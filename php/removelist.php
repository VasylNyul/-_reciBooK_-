<?php
    require_once 'connect.php';
   
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['removelist'];

    $id = $data['id'];
    
    $result1 = $mysql->query("DELETE FROM `list` WHERE `list_id` = '$id' ");
    if(!$result1)
    {
        die("Видалення продукту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        die("Продукт успішно видалений");
        $mysql->close();
    
        exit();
        
    }
    $mysql->close();

    exit();

?>