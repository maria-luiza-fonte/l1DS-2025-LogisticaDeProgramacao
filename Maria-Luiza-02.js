/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa 
- Crie uma variável numérica e armazene o ano de nascimento 
- Escreva "Nome da pessoa" nasceu em "ano de nascimento" 
- Calcule a idade da pessoa 
- Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x2 + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

console.log("-----------------------------------------------------");

var nome = "Pablo";
var nasceu = "2008";
var idade = "17";
console.log(nome, "nasceu em", nasceu);
console.log(nome, "idade", idade);

console.log("-----------------------------------------------------");

var x = 12;
var y = 6;
var area = x * y;
console.log("x", x, "* y", y, "area é igual:", area);
console.log("A área é de", area);

console.log("-----------------------------------------------------");

var altura = 5;
var volume = area * altura;
console.log("Volume do retângulo é de?:", volume);

console.log("-----------------------------------------------------");

var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("O valor de delta é:", delta);

console.log("-----------------------------------------------------");

var compra = 450;
var desconto = 0.03; // var desconto = 3/100
desconto = compra * desconto;
var total = compra - desconto;
console.log(
  "Compra: R$",
  compra,
  " - Desconto R$",
  desconto,
  " = Total:",
  total
);

console.log("-----------------------------------------------------");

var tempo = 3.5;
var velocidade = 95;
var distância = tempo * velocidade;
console.log("A distância percorrida é de:", distância, "Km");