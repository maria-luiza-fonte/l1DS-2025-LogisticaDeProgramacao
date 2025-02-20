/*****************************************************************************************************
                                Lista de Exercícios 04
 ****************************************************************************************************/
// 1. Crie e imprima um vetor com 5 elementos numéricos.
var vetor = [2, 3, 4, 5, 6];
console.table(vetor);

// 2. Imprima na tela o 3º elementos do vetor.

console.log(vetor[2]);

// 3. Faça uma copía do vetor original.
var copia = vetor.splice();
console.table(copia);
// 4. Altere o conteúdo do vetor cóoia para que seus valores sejam o dobro dos valores do vetor original.

copia[0] = vetor [0] * 2
copia[1] = vetor [1] * 2
copia[2] = vetor [2] * 2
copia[3] = vetor [3] * 2
copia[4] = vetor [4] * 2
console.table(copia);

// 5.Crie uma matriz 3x3
var matriz = [
    [9, 8, 1],
    [7, 1, 2],
    [6, 2, 8],
];

// 6. Imprima os valores da diagonal principal.
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);


