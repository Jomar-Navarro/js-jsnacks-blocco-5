console.log('js-jsnacks-blocco-5');

/*
------------------------------------------------------------------------

                                JSnack 1

------------------------------------------------------------------------
*/
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

/*
------------------------------------------------------------------------

                                JSnack 2

------------------------------------------------------------------------
*/

// Array vuoti per pushare la differenza di lunghezza delle varie zucchine.
let zucchineMaggiori15 = [];
let zucchineMinori15 = [];

// Ciclo forOf che itera con una condizione che separe le lunghezze delle zucchine
for (let zucchin of zucchine) {
  if (zucchin.lunghezza < 15) {
    zucchineMinori15.push(zucchin);
    console.log(zucchin);
  }else{
    zucchineMaggiori15.push(zucchin);
    console.log(zucchin);
  }
};

// Ciclo che mi calcola e mi stampa il peso totale delle zucchine con lunghezza minore di 15
let pesoTotminori15 = 0;
for (let zucchin of zucchineMinori15) {
  pesoTotminori15 += parseInt(zucchin.peso);
  console.log(zucchin.peso);
}

console.log('Il peso totale delle zucchine é: ', pesoTotminori15);

// Ciclo che mi calcola e mi stampa il peso totale delle zucchine con lunghezza maggiore di 15
let pesoTotMaggiori15 = 0;
for (let zucchin of zucchineMaggiori15) {
  pesoTotMaggiori15 += parseInt(zucchin.peso);
  console.log(zucchin.peso);
}

console.log('Il peso totale delle zucchine é: ', pesoTotMaggiori15);

/*
------------------------------------------------------------------------

                                JSnack 3

------------------------------------------------------------------------
*/

const parola = 'ciao';

function parolaGirata() {

  // Mi separe le varie lettere e le converte in un array di caratteri
  const splitParola = parola.split('');
  // Mi ribalta i caratteri dell'array
  const nuovaParola = splitParola.reverse();

  // Mi unisce i caratteri dell'array e li mette in una nuova stringa
  const parolaInvertita = nuovaParola.join('');

  return parolaInvertita;
}

const nuovaParola = parolaGirata(parola);
console.log(nuovaParola);

/*
------------------------------------------------------------------------

                                JSnack 4

------------------------------------------------------------------------
*/

const arrayUno = ['a', 'b', 'c'];
const arrayDue = [1, 2, 3];

const arrayUnoDue = [];

for (const i in arrayUno) {
  arrayUnoDue.push(arrayUno[i], arrayDue[i]);
}

console.log(arrayUnoDue);

/*
------------------------------------------------------------------------

                                JSnack 5

------------------------------------------------------------------------
*/
