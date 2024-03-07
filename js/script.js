console.log('js-jsnacks-blocco-5');

// JSnack 1
const zucchine = [
  {peso: '120', lunghezza: '8',},
  {peso: '100', lunghezza: '7',},
  {peso: '140', lunghezza: '9',},
  {peso: '160', lunghezza: '10',},
  {peso: '200', lunghezza: '12',},
  {peso: '250', lunghezza: '17',},
  {peso: '270', lunghezza: '15',},
  {peso: '300', lunghezza: '16',},
  {peso: '350', lunghezza: '18',},
  {peso: '70',  lunghezza: '5',}
];

// Peso Totale delle zucchine
let pesoTotale = 0;

zucchine.forEach(zucchina => {
  pesoTotale += parseInt(zucchina.peso);
});

console.log('Il peso totale delle zucchine é: ', pesoTotale);

// JSnack 2
let zucchineMaggiori15 = [];
let zucchineMinori15 = [];

for (let zucchin of zucchine) {
  if (zucchin.lunghezza <= 15) {
    zucchineMinori15.push(zucchin);
    console.log(zucchin);
  }else{
    zucchineMaggiori15.push(zucchin);
    console.log(zucchin);
  }
};

