<?php
    require './aluno.php';
    
    $aluno1 = new Aluno ("Jao Jorge", 4, 8, 9);
    $aluno2 = new Aluno ("Rodrigo Santoro", 3, 7, 5);
    $aluno3 = new Aluno ("Rico Montoya", 4, 6, 5);

    $listaAlunos = [$aluno1,$aluno2,$aluno3];
  
    $json = json_encode($listaAlunos);

    echo $json;
?>