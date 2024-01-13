let fruta = 'morango';

switch(fruta){
    case 'laranja':
    case 'morango':
        console.log('suco de laranja com ' + fruta);
        break;
    case "limão":
    case 'pessego':
        console.log('suco de limão com ' + fruta);
        break;
    default :
        console.log('fruta não encontrada');
        break;
}