
//Enviar uma requisição GET para um endereço
fetch('http://localhost/2907/controller.php')

//Garante que a resposta está no formato json
.then (
    function (response) {
        return response.json();
    }
)

//Realizar operações necessarias
.then (
    function(response) {
        console.log(response)
    }
)