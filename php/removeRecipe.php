<?php
    require_once 'connect.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    $data = $data['ID'];
    $recipe_id = $data['id'];

    $result1 = $mysql->query("DELETE FROM `recipe` WHERE `recipe_id` = '$recipe_id' ");
    
    if(!$result1)
    {
        die("Видалення рецепту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        die("Рецепт успішно видалений");
        $mysql->close();
    
        exit();
        
    }
    $mysql->close();

    exit();


?>