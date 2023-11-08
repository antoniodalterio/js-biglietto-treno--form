'use strict';

/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. */

const bottoneCalc = document.querySelector('#btn-genera');
const bottoneReset = document.querySelector('#btn-annulla');
const comparsaCalcolo = document.getElementById('sezione-calcolo');

// Campi biglietto virtuale
const nomeSuBiglietto = document.getElementById('nome-passeggero');
const carrozzaNumero = document.getElementById('carrozza');
const codiceCp = document.getElementById('codice');
const costoBiglietto = document.getElementById('costo-biglietto');

// Funzione bottone Genera

bottoneCalc.addEventListener('click', function () {
  const personName = document.getElementById('nome').value;

  const kilometriViaggio = Number(document.getElementById('kilometri').value);

  let prezzoBiglietto = Number(kilometriViaggio * 0.21).toFixed(2);

  const passeggeroEta = document.getElementById('eta').value;

  if (passeggeroEta === 'minorenne') {
    prezzoBiglietto = Number(
      prezzoBiglietto - (prezzoBiglietto / 100) * 20
    ).toFixed(2);
  } else if (passeggeroEta === 'over65') {
    prezzoBiglietto = Number(
      prezzoBiglietto - (prezzoBiglietto / 100) * 40
    ).toFixed(2);
  }
  //  valori generati nel biglietto
  nomeSuBiglietto.innerHTML = personName;
  carrozzaNumero.innerHTML = Math.round(Math.random() * 5);
  codiceCp.innerHTML = Math.round(Math.random() * 10000);
  costoBiglietto.innerHTML = prezzoBiglietto + '€';

  // comparsa biglietto
  comparsaCalcolo.classList.add('d-block');
  comparsaCalcolo.classList.remove('d-none');
});

bottoneReset.addEventListener('click', function () {
  comparsaCalcolo.classList.remove('d-block');
  comparsaCalcolo.classList.add('d-none');
});
