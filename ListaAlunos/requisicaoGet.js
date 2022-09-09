function buscarDados(){

    //Realizando uma requisição  assincrona para o arquivo Controller.php
    fetch('http://localhost/0902_pw/Controller.php')
    //Convertendo a resposta da requisição em JSON
    .then(function(response){
        return response.json()
    })
    //Realizando ações sobre a resposta convertida
    .then(function(response){
        preencherCard(response)
    })
}

buscarDados();