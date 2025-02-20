/***************************************************** 
                Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/ 

var nome = "Tibúrcio"; 
var banco = "Inter"; 

var saldo = 1000;

console.log("Meu nome é", nome, ", Sou cliente do banco ", banco, "anos");


saldo = saldo +1000;
console.log("Deposito de R$ 1.000,00, saldo Atual:", saldo)


saldo = saldo -1500;
console.log("Saque de R$ 1.500,00, saldo Atual: R$1,000");

var nome = "Luiza";
var banco = "Inter";
let agencia = 6588;
let conta = "12398-9";
let saldo = 1000

console.log("*******************", banco,"********");
console.log("Clientes:",nome);
console.log("Agencia") ,agencia,"| Conta:, conta";
console.log("Seu saldo é de R$", saldo );

console.log("  + Deposito: R$75,00");
saldo = saldo + 75;
console.log("   + Deposito: R$100,00");
saldo = saldo + 100;
console.log("     - Saque: R$150,00");
