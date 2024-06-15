const prompt = require('readline-sync');

const idade = prompt.question("Qual e a sua idade?");
const idadeNunber = Number(idade);
console.log(idadeNunber, typeof idadeNunber);


//coersão explicita ( conversão manual)

console.log(Number(X)); // não é um numero

console.log(String(10), typeof String(10))

console.log(Boolean(2));


//coersão implicita

console.log(1 + '1');
console.log(10 + '5');
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');

//qual a saida desse codigo?

let n = 1 + '1' // 11 'string'

n = n - 1 // 11-1 = 10 em string

console.log(n);

//Qual será a saida desse codigo?

console.log(2 + 3 + 4 + '5'); // 95

//Qual será a saida desse codigo?

console.log('5' + 2 + 3 + 4); // 5234

// qual sera a saida desse codigo?

console.log('10' - '4' - '3' - 2 + '5'); // 15