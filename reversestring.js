var palavra = prompt("Qual palavra gostaria de inverter?");
function reverterString(){
    var novaString = "";
    for (i = palavra.length - 1; i>=0 ; i--){
        novaString = novaString + palavra[i];
    }
    console.log("Invertendo sua palavra fica assim: " + novaString)
}
reverterString(palavra)