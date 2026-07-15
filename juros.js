import entradaDados from 'readline-sync';

console.log("=== APLICAÇÃO DE JUROS ===\n");


let valorOriginalDivida = Number(entradaDados.question("Informe o valor original da divida: R$ "));
let diasAtraso = Number(entradaDados.question("Informe a quantidade de dias de atraso: "));

let taxaJuros;

if (diasAtraso > 0) {
    if (diasAtraso > 15) {
        taxaJuros = 10; 
    } else {
        taxaJuros = 5;  
    }

    let valorJuros = (valorOriginalDivida * taxaJuros) / 100;
    
    let totalDivida = valorOriginalDivida + valorJuros; 

    console.log("\n-----------------------------");
    console.log("Valor original da dívida: R$ " + valorOriginalDivida);
    console.log("Dias de atraso: " + diasAtraso);
    console.log("Taxa de juros aplicada: " + taxaJuros + "%");
    console.log("Valor do juros cobrado: R$ " + valorJuros);
    console.log("Valor total a ser pago: R$ " + totalDivida);
    console.log("-----------------------------\n");

} else {
    console.log("\nA dívida está em dia! Valor a pagar: R$ " + valorOriginalDivida);
}