// Criando variáveis do tipo array (VETOR)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); //imprimindo os dados do array
console.table(numeros); //imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item de indice 1
console.log("O vetor tem:", numeros.length, "elementos.");

var dinos = [
    "Tiranossauro Rex",
     "Estegonossauro", 
     "Anquilossauro",
     "Titanossauro"
    ];
console.log(dinos); // Imprimindos os dados
console.log(dinos); // Imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

// Adicionando elementos a um vetor existentes
dinos.push("Brontossauro");
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátops"); //adiciona um elemento no início do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//Obtendo um elemento com base em seu índice (posição)
console.log("1ª posição:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); //quando não temos o item, apresenta um erro (underfined)

//Alterando o elementos com base em seu índice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//Remover elementos do vetor
var dinos =[
"Tiranossauro Rex",
     "Estegonossauro", 
     "Anquilossauro",
     "Titanossauro",
     "Brontossauro",
    ];
console.table(dinos);

dinos.pop(); //Remove o último elemento do array (vetor)
console.table(dinos);

dinos.shift(); //Remove o primeiro elemento do array (vetor)
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento de índice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos);

var dinos = [
    "Tricerátops",
    "Tiranossauro Rex",
    "Estegossauro",
    "Anquilossauro",
    "Brontossauro",
    "Ictiossauro",
"Pterodáctilo",
"Espinossauro"
];

console.table(dinos);
var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado,"está no indice", posicao);

 elementoProcurado = "Estegossauro";
 posicao = dinos.indexOf(elementoProcurado);
 console.log(elementoProcurado, "está no indice:", posicao);
 
 elementoProcurado = "Castellossauro";
 posicao = dinos.indexOf(elementoProcurado);
 console.log(elementoProcurado, "está no indice:", posicao);
 console.log("indexOf = -1 significado que o elemento não foi encontrado no vetor!")
 
 //Excluindo um elemento com base no seu nome
var elementoExcluir = "Pterodáctilo"
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//Criando uma cópia de um array (vetor)
var copia = dinos.splice();
console.log('Copiando um vetor!');
console.table(copia);
//Operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; // idade = idade +1
console.log(idade);

idade--; // idade = idade -1
console.log(idade);
console.log("----------------------------------");

var novaIdade = idade++;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

//Operadores de Atribuição Aritimética
console.log("----------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; // x = x + y
console.log("x =", x, "| y =", y);

x -= y;// x = x- y
console.log("x =", x, "| y =", y);

x *= y; //x = x * y
console.log("x =",x,"| y =",y);

x /= y; //x = x / y
console.log("x =",x,"| y =",y);

// Criando uma matriz
var matriz = [
    [9, 0, 1],
    [7, 1, 2],
    [1, 3, 9],
];
console.table(matriz);

//Obtendo elementos com base em seus índices
console.log("Matriz[1,2] =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

//Alterando valores de elementos com base em seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);


