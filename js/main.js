'use strict';

/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. */

const bottoneCalc = document.querySelector('#btn-genera');
const bottoneReset = document.querySelector('#btn-annulla');
const comparsaCalcolo = document.getElementById('sezione-calcolo');

console.log(bottoneCalc);
bottoneCalc.addEventListener('click', function () {
  const personName = document.getElementById('nome').value;
  console.log(personName);

  const kilometriViaggio = Number(document.getElementById('kilometri').value);
  console.log(kilometriViaggio);

  let prezzoBiglietto = Number(kilometriViaggio * 0.21).toFixed(2);
  console.log(prezzoBiglietto);

  const passeggeroEta = document.getElementById('eta').value;
  console.log(passeggeroEta);
  const minorenne = document.getElementById('minore').value;
  console.log(minorenne);
  const over65 = document.getElementById('over65').value;
  let scontoBigliettoMinori = 0;
  let scontoBigliettoOver65 = 0;
  if (passeggeroEta == minorenne) {
    scontoBigliettoMinori = Number(
      prezzoBiglietto - (prezzoBiglietto / 100) * 20
    ).toFixed(2);
    prezzoBiglietto = scontoBigliettoMinori;
    console.log(prezzoBiglietto);
  } else if (passeggeroEta === over65) {
    scontoBigliettoOver65 = Number(
      prezzoBiglietto - (prezzoBiglietto / 100) * 40
    ).toFixed(2);
    prezzoBiglietto = scontoBigliettoOver65;
    console.log(prezzoBiglietto);
  }

  const nomeSuBiglietto = document.getElementById('nome-passeggero');
  nomeSuBiglietto.innerHTML = personName;

  const carrozzaNumero = document.getElementById('carrozza');
  carrozzaNumero.innerHTML = Math.round(Math.random() * 5);

  const codiceCp = document.getElementById('codice');
  codiceCp.innerHTML = Math.round(Math.random() * 10000);

  const costoBiglietto = document.getElementById('costo-biglietto');
  costoBiglietto.innerHTML = prezzoBiglietto + '€';

  comparsaCalcolo.classList.add('d-block');
  comparsaCalcolo.classList.remove('d-none');
});

bottoneReset.addEventListener('click', function () {
  comparsaCalcolo.classList.remove('d-block');
  comparsaCalcolo.classList.add('d-none');
});
