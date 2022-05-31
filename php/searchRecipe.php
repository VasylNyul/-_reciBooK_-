<?php
    require_once 'connect.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['recipe'];
    var_dump($data);

    $recipe_name = $data['searchValue'];
    $meals = $data['meals'];

    $ingredients = json_encode($meals);
    
    $result = $mysql->query("SELECT * FROM `recipe` WHERE `recipe_name` = '$recipe_name' OR `ingredients` = '$ingredients' ");
    $recipe = $result->fetch_assoc();
    
    if($recipe)
    {
        $recipe_name1 = $recipe['recipe_name'];
        $instruction = $recipe['instruction'];
        $photo = $recipe['photo'];
        $ingred = json_decode($recipe['ingredients']);
        die(json_encode(['recipe_name' => $recipe_name1,
                         'ingredients' => $ingred,
                         'instruction' => $instruction,
                         'photo' => $photo
                        ]));
    }
    else{
        die("Такого рецепту не знайдено");
    }
    $mysql->close();
    
    exit();
        
?>