/*************************************************************************************************
                                    Lista de Exercícios 05
**************************************************************************************************/
// 1. Crie uam função que resenha como parâmetro o ano de nascimento de uma pessoa e retorne sua idade
function idade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}
console.log("A Maria Luiza", idade(2025, 2008), "anos.");
    
// 2. Crie uma função que receba a quantidade de combustivel de um carro e retorne quantos kms ele pode viajar com esse  combstível
// . Considere que o veículo faz uma média de 12 kms/L.
 
const combstível = (Litros) => {
    return Litros * 12;
};
var car1 = 20
var car2 = 9
var car3 = 4
console.log("Carro 1:",car1,"->",combstível(car1),"kms.")
console.log("Carro 1:",car2,"->",combstível(car2),"kms.")
console.log("Carro 1:",car3,"->",combstível(car3),"kms.")
