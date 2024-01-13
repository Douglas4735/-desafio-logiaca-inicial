
//DO = faça WHILE = enquanto

let contador = 0;
do{
    console.log('olá');
    contador++;
}while(contador <3)

//----------------------------------------------

let bolinhosComidos = 0;

do {
  bolinhosComidos++;
  console.log("Você comeu", bolinhosComidos, "bolinhos!");
} while (bolinhosComidos < 5);

//---------------------------------------------

let numero;

do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);

