
function calcularMedia(){
    //Seleciona todas as tr
    var tr = document.querySelectorAll("tr");
    var linha = 1;
    var coluna = 1;
    var media = 0;
        while (linha<tr.length) {

            while(coluna<4) {
                //Acrescenta o conteuda da linha (tr) de uma coluna (td) na variavel media
                media = parseInt(media) + parseInt(tr[linha].children[coluna].textContent);
                coluna++;
            }
            media = media/3;

            tr[linha].children[coluna].textContent = media.toFixed(2);

            coluna = 1;

            linha++;

            media = 0;
        }
}
calcularMedia();