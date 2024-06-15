//Operadores booleanos : Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero2 === "10"); // esses 3 sinais de iguais ver se SOMENTE os valor sao iguais independente de tipo
console.log(numero2 == numero1);

console.log(numero1 !== numero2);

console.log(numero1 > numero2);

const idadePessoa1 = 20;
const idadePessoa2 = 15;

console.log(idadePessoa1 >= 18 && idadePessoa2 >=18); // faz a comparação se as duas sao maior de idade 
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // faz a comparação se uma OU outra é maior de idade

console.log(!true); // inverte o valor

console.log(!(idadePessoa1 >= 18)); // faz a comparação se ela é menor de idade