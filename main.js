// OGGETTO ESERCIZIO
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19




// Creare variabile nome utente
var userFirstName;
// Creare variabile cognome utente
var userLastName;
// Creare variabile colore preferito utente
var userFavouriteColor;


// Chiedere nome utente
userFirstName = prompt("Scrivi il tuo nome");
// Chiedere cognome utente
userLastName = prompt("Scrivi il tuo cognome");
// Chiedere colore preferito utente
userFavouriteColor = prompt("Scrivi il nome del tuo colore preferito");

// stampa la password perl'utente
document.getElementById("pwdgen").innerHTML = "Ecco la tua nuova password: " + userFirstName + userLastName + userFavouriteColor + "19";
