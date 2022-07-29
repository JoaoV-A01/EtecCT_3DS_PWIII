var btn = document.querySelector("#btn_inserir");
alert(btn)
//Selecionar botão
//var tr_linha = document.querySelectorAll("tr");
function inseriraluno(event){
event.preventDefault();

//Criar elementos html
//var tr_linha = document.createElement ("tr");
var td_Nome = document.createElement ("td"); 
var td_Nota1 = document.createElement ("td"); 
var td_Nota2 = document.createElement ("td"); 
var td_Nota3 = document.createElement ("td");
var td_Media = document.createElement ("td"); 

//buscar dados do formulario
var formNome = document.querySelector (".nome");
var formNota1 = document.querySelector (".nota1");
var formNota2 = document.querySelector (".nota2");
var formNota3 = document.querySelector (".nota3");

//modificar conteudo das tds
td_Nome.textContent = formNome.value;
td_Nota1.textContent = formNota1.value;
td_Nota2.textContent = formNota2.value;
td_Nota3.textContent = formNota3.value;

//inserir tds na tr
var nova_tr = document.createElement("tr");
nova_tr.appendChild(td_Nome);
nova_tr.appendChild(td_Nota1);
nova_tr.appendChild(td_Nota2);
nova_tr.appendChild(td_Nota3);
nova_tr.appendChild(td_Media);

var table = document.querySelector("table");

//Inserindo Linha na Tabela
var CorpoTabela = document.querySelector(".tbl");
CorpoTabela.appendChild(nova_tr);

calcularMedia();
} //Fechar Função

btn.addEventListener("click",inseriraluno);

