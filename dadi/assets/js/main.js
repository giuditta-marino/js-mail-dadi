// GENERARE UN NUMERO RANDOM DA 1 A 6 PER IL GIOCATORE
var dadoGiocatore = Math.floor(Math.random() * 6) + 1;

document.getElementById('giocatore').innerHTML= dadoGiocatore;

// GENERARE UN NUMERO RANDOM DA 1 A 6 PER IL COMPUTER
var dadoComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById('computer').innerHTML= dadoComputer;

// STABILIRE QUALE DEI DUE NUMERI E' MAGGIORE E COMUNICARE ESITO
if (dadoGiocatore > dadoComputer) {
  document.getElementById('vincitore').innerHTML= "Hai vinto!";
} else if (dadoGiocatore == dadoComputer) {
  document.getElementById('vincitore').innerHTML= "Hai pareggiato!";
} else {
  document.getElementById('vincitore').innerHTML= "Hai perso!";
}
