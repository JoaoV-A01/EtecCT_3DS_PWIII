<?php 
    function abrirConexao(){
        $host = "fdb26.awardspace.net";
        $usuario = "3442317_crud";
        $senha = "Sistema%Crud08";
        $bd = "3442317_crud";
        $conexao = new mysqli($host,$usuario,$senha,$bd);
        return $conexao;
    }
    
    
    function fecharConexao($conexao){
        @mysqli_close($conexao) or die(mysqli_error($conexao));
    }

?>