<?php
    require './conexaobd/bd_conexao.php';
    
    $conexao = abrirConexao();

    $matricula = 2;
    $nome = 'Joana';
    $nota1 = 10;
    $nota2 = 10;
    $nota3 = 10;

    $query = "INSERT INTO tbl_pw_aluno VALUES" . "($matricula,$nome,$nota1,$nota2,$nota3)";

    mysqli_query($conexao,$query) or die ("Erro ao tentar incluir");

    fecharConexao($conexao);

    echo ("Incluido com sucesso");
?>