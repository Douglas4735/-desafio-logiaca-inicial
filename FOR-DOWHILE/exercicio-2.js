let jogada = 0;
let cara = false;

while(!cara){
    jogada++;
    cara = Math.random() < 0.5;
}
    console.log(`A moeda caio cara apos ${jogada} jogadas`);