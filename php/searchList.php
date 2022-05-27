<?php

    require_once 'connect.php';
    
    //var_dump($_SESSION);

    $customer_id = $_SESSION['customer_id'];
    
    $result = $mysql->query("SELECT `product` FROM `list` WHERE `customer_id` = '$customer_id'");
    
    //$list = $result2->fetch_assoc();
    
    // $list_arr = [];
    while($list = $result->fetch_assoc())
    {
        $list_arr[] = $list['product'];
        //var_dump($list);
        //$product = $list['product'];
        //printf("%s (%s)\n", $list["product"],  $list["product"]);
        
    }
    die(json_encode($list_arr /*['product' => $list['product']])*/));

    //$mysql->next_result();
    $mysql->close();
    
    exit();
        
?>