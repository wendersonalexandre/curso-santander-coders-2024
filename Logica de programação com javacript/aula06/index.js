// MUito util quando sua variavel possui valores especificos

const permissoes = 'aluno';

switch (permissoes){
    case 'aluno':
        console.log('Voçê so pode visualizar as aulas');
    break;
    case 'Professor':
        console.log("voçê pode alterar as aulas e adicionar atividades");
        break;
    case 'admin':
        console.log('Voçê pode fazer o que quiser na plataforma');
        break;
    default :
        console.log("Não sei quem voçê é :( ");

}