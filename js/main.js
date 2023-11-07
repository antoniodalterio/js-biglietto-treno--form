'use strict';

/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. */

const bottoneCalc = document.querySelector('input[type="submit"]');

console.log(bottoneCalc);
bottoneCalc.addEventListener('click', function () {
  const personName = document.getElementById('nome').value;
  console.log(personName);

  const kilometriViaggio = Number(document.getElementById('kilometri').value);
  console.log(kilometriViaggio);

  const prezzoBiglietto = Number(kilometriViaggio * 0.21).toFixed(2);
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
    console.log(scontoBigliettoMinori);
  } else if (passeggeroEta === over65) {
    scontoBigliettoOver65 = Number(
      prezzoBiglietto - (prezzoBiglietto / 100) * 40
    ).toFixed(2);
    console.log(scontoBigliettoOver65);
  }
});
