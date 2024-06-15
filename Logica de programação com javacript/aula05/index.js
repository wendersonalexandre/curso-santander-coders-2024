const prompt = require("readline-sync");

const idade = Number( prompt.question("Qual é a sua idade? ") );

const maiorDeIdade = idade >= 18;

// Estruturas condicionais  if|else

if (maiorDeIdade){
    //faça algumac coisa...
    console.log('Voçê é maior de idade!');
} else{
    console.log('Voçê ainda é menor de idade. :(');
}

const mediaDoAluno = 10;

if (mediaDoAluno >= 6){
    console.log('Aluno aprovado');
} else if (mediaDoAluno >= 5) {
    console.log('Aluno de recuperação');
} else{
    console.log('Aluno reprovado');
}

// posso dirigir?

const idadee = 18
const temCnh = true

if (idadee >= 18 && temCnh){
    console.log("Voçê pode dirigir ");
} else{
    console.log('Voçê não pode dirigir');
}

