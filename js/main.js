const priceForKm = 0.21;
const currentDate = new Date();
const firstName = prompt ("Come ti chiami?");
const lastName = prompt ("Qual è il tuo cognome");
const yearOfBirth = prompt ("Indicami il tuo anno di nascita");
const departure = prompt ("inserisci città da cui partire")
const destination = prompt ("inserisci  città a cui si è diretti");
// Città
const napoli = "Napoli";
const milano = "Milano";
const torino = "Torino";
const firenze = "Firenze";
const roma = "Roma";
const bari = "Bari";
const bologna = "Bologna";
const potenza = "Potenza";
const perugia = "Perugia";

// Tratte partenza Napoli
const napoliMilano = 790;
const napoliTorino = 938;
const napoliFirenze = 483;
const napoliRoma = 222;
const napoliBari = 219;
const napoliPotenza = 132;
const napoliPerugia = 295;
const napoliBologna = 575;


// OPERAZIONI
const fullName = firstName + " " + lastName;
// calcolo età
const userAge = currentDate.getFullYear() - parseInt(yearOfBirth);
// calcolo sconti
const discountMinors = ((priceForKm * 20) / 100);
const discountOver65 = ((priceForKm * 40) / 100);

// CONDIZIONI

// TRATTE in KM
if (departure == napoli && destination == milano) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliMilano);
} else if (departure == napoli && destination == torino) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliTorino);
} else if (departure == napoli && destination == firenze) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliFirenze);
} else if (departure == napoli && destination == bologna) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliBologna);
} else if (departure == napoli && destination == perugia) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliPerugia);
} else if (departure == napoli && destination == potenza) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliPotenza);
} else if (departure == napoli && destination == bari) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliBari);
} else if (departure == napoli && destination == roma) {
    document.getElementById('final-price').innerHTML = (priceForKm * napoliRoma);
}

if (userAge < 18) {
    document.getElementById('final-price').innerHTML = ((priceForKm * napoliMilano) - discountMinors);
}





// MODIFICHE HTML IN JS


// CONSOLE
console.log("l'utente ha" + " " + userAge + " " + "anni");
console.log(departure)
console.log(destination)

