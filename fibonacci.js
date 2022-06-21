var numero = prompt("Digite seu número: ");
var soma = [0, 1];
var a = 1;
function fibonacci(){
        for (i=1; soma[i]<numero; i++ ){
            soma[i+1] = soma[i] + soma [i-1];
        }
        for (i=0; i<=soma.length; i++){
        if (soma[i] == numero){
            a = a + 2;
            }
        }
        if (a > 1){
            console.log("O número "+ numero + " pertence à sequência de Fibonacci");
        } else { 
            console.log("O número "+ numero + " não pertence à sequência de Fibonacci")
        }   
    }
fibonacci(numero);