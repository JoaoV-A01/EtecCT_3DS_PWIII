<?php
    require './conexaobd/bd_conexao.php';
    require './aluno.php';

    header ('Access-Control-Allow-Origin:*');

    $conexao = abrirConexao();

    $query = "SELECT * FROM tbl_pw_aluno";

    $resultado = mysqli_query($conexao,$query) or die ("Erro ao tentar consultar");

    while($registro = mysqli_fetch_array($resultado)) {
        
        $matricula = $registro['matriculaAluno'];
        $nome = $registro['nomeAluno'];
        $nota1 = $registro['Nota1Aluno'];
        $nota2 = $registro['Nota2Aluno'];
        $nota3 = $registro['Nota3Aluno'];

        $aluno = new Aluno ($nome,$nota1,$nota2,$nota3,$media);
        array_push ($array,$aluno);
        
        echo "Matricula: " . $matricula . "<br>" . 
        "Nome: " . $nome . "<br>" . 
        "Nota 1: " . $nota1 . "<br>" . 
        "Nota 2: " . $nota2 . "<br>" . 
        "Nota 3: " . $nota3 . "<br>";
    }

    $json = json_encode ($array);
    echo $json;

    fecharConexao($conexao);
?>