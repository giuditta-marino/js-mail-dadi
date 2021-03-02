// CHIEDO ALL'UTENTE E-MAIL
var email = prompt("Inserisci il tuo indirizzo e-mail:");

// CREO UNA LISTA DI E-MAIL E LA SALVO IN UNA VARIABILE

var listaEmail = ["giudittamarino89@gmail.com", "pippo77@hotmail.com", "gattino90@libero.it", "francescofusilli10@gmail.com", "miao@tin.it", "ciao@tin.it", "giu@tin.it", "ciacia@tin.it", "ciaciacia@tin.it"];

// CREO UNA VARIABILE UTILE PER IL CHECK DELLA LISTA E GLI ASSEGNO VALORE FALSE
var checkEmail = false;

// SCORRO GLI ELEMENTI DELLA LISTA MAIL E CONTROLLO CHE L'E-MAIL DATA SIA IN LISTA, SE SI CHECKEMAIL DIVENTA VERA
for (var i = 0; i < listaEmail.length; i++) {
  if (listaEmail[i] == email) {
    checkEmail = true;
  }
}

// STAMPO IL MESSAGGIO CON L'ESITO DELLA RICERCA. SE CHECKEMAIL E' VERA, DIRO' CHE L'EMAIL E' IN LISTA E VICEVERSA
if (checkEmail){
  document.getElementById('in-lista').innerHTML= "Il tuo indirizzo e-mail è in lista.";
} else {
  document.getElementById('in-lista').innerHTML= "Il tuo indirizzo e-mail non è in lista.";
}
