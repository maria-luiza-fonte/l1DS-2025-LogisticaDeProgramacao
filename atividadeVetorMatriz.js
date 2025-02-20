/**************************************************************************************
                                 Exercicios Vetor Mariz
 **************************************************************************************/
var dados = [];
console.log("Favor informar seu nome");
dados.push("Maria");

console.table(dados);


console.log("Informe seu cpf:");
dados.push("123.456.789-97");

console.table(dados);

//Mostre ao usuários os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu CPF é:", dados[1]);