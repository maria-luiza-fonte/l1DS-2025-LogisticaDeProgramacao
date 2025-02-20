/***********************************************************************
                             Lista de Exercícios 03
***********************************************************************/
// 1. Crie um array de frutas com os seguintes elementos:Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goiaba no inicio.
// 4. Exiba o conteúdo no índice 5.
// 5. Exclua o elemento uva.
//6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4

var frutas = ["Banana","Maçã", "Pera","Uva","Morango"];
console.log(frutas); // Imprimindos os dados
console.table(frutas); // Imprimindo os dados em forma de tabela
console.log("O vetor frutas tem:", frutas.length, "elementos.");

frutas.push("Tangerina");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

frutas.unshift("Goiaba"); //adiciona um elemento no início do vetor
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

console.log(frutas[5])
 
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);