const priceForKm = 0.21;
const currentDate = new Date();
const firstName = prompt ("Come ti chiami?");
const lastName = prompt ("Qual è il tuo cognome");
const yearOfBirth = prompt ("Indicami il tuo anno di nascita");
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
const ticketPriceMilano = (priceForKm * napoliMilano);
const ticketPriceTorino = (priceForKm * napoliTorino);
const ticketPriceFirenze = (priceForKm * napoliFirenze);
const ticketPriceRoma = (priceForKm * napoliRoma);
const ticketPriceBari = (priceForKm * napoliBari);
const ticketPricePotenza = (priceForKm * napoliPotenza);
const ticketPricePerugia = (priceForKm * napoliPerugia);
const ticketPriceBologna = (priceForKm * napoliBologna);
// calcolo età
const userAge = currentDate.getFullYear() - parseInt(yearOfBirth);
// calcolo sconti
const discountMinorsMilano = ((ticketPriceMilano * 20) / 100);
const discountOver65Milano = ((ticketPriceMilano * 40) / 100);
const discountMinorsTorino = ((ticketPriceTorino * 20) / 100);
const discountOver65Torino = ((ticketPriceTorino * 40) / 100);
const discountMinorsFirenze = ((ticketPriceFirenze * 20) / 100);
const discountOver65Firenze = ((ticketPriceFirenze * 40) / 100);
const discountMinorsRoma = ((ticketPriceRoma * 20) / 100);
const discountOver65Roma = ((ticketPriceRoma * 40) / 100);
const discountMinorsBari = ((ticketPriceBari * 20) / 100);
const discountOver65Bari = ((ticketPriceBari * 40) / 100);
const discountMinorsPotenza = ((ticketPricePotenza * 20) / 100);
const discountOver65Potenza = ((ticketPricePotenza * 40) / 100);
const discountMinorsPerugia = ((ticketPricePerugia * 20) / 100);
const discountOver65Perugia = ((ticketPricePerugia * 40) / 100);
const discountMinorsBologna = ((ticketPriceBologna * 20) / 100);
const discountOver65Bologna = ((ticketPriceBologna * 40) / 100);

// PREZZO FINALE SCONTATO
const priceFianalMinorsMilano = (ticketPriceMilano - discountMinorsMilano);
const priceFianalover65Milano = (ticketPriceMilano - discountOver65Milano);
const priceFianalMinorsTorino = (ticketPriceTorino - discountMinorsTorino);
const priceFianalover65Torino = (ticketPriceTorino - discountOver65Torino);
const priceFianalMinorsFirenze = (ticketPriceFirenze - discountMinorsFirenze);
const priceFianalover65Firenze = (ticketPriceFirenze - discountOver65Firenze);
const priceFianalMinorsPotenza = (ticketPricePotenza - discountMinorsPotenza);
const priceFianalover65Potenza = (ticketPricePotenza - discountOver65Potenza);
const priceFianalMinorsPerugia = (ticketPricePerugia - discountMinorsPerugia);
const priceFianalover65Perugia = (ticketPricePerugia - discountOver65Perugia);
const priceFianalMinorsBologna = (ticketPriceBologna - discountMinorsBologna);
const priceFianalover65Bologna = (ticketPriceBologna - discountOver65Bologna);
const priceFianalMinorsBari = (ticketPriceBari - discountMinorsBari);
const priceFianalover65Bari = (ticketPriceBari - discountOver65Bari);
const priceFianalMinorsRoma = (ticketPriceRoma - discountMinorsRoma);
const priceFianalover65Roma = (ticketPriceRoma - discountOver65Roma);

// Calcolo prezzo biglietto
if (destination == milano) {
    document.getElementById('final-price').innerHTML = ticketPriceMilano.toFixed(2);
} else if (destination == torino) {
    document.getElementById('final-price').innerHTML = ticketPriceTorino.toFixed(2);
} else if (destination == firenze) {
    document.getElementById('final-price').innerHTML = ticketPriceFirenze.toFixed(2);
} else if (destination == bologna) {
    document.getElementById('final-price').innerHTML = ticketPriceBologna.toFixed(2);
} else if (destination == perugia) {
    document.getElementById('final-price').innerHTML = ticketPricePerugia.toFixed(2);
} else if (destination == potenza) {
    document.getElementById('final-price').innerHTML = ticketPricePotenza.toFixed(2);
} else if (destination == bari) {
    document.getElementById('final-price').innerHTML = ticketPriceBari.toFixed(2);
} else if (destination == roma) {
    document.getElementById('final-price').innerHTML = ticketPriceRoma.toFixed(2);
}



// APPLICAZIONE SCONTI
if (userAge < 18 && destination == milano) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsMilano.toFixed(2);
} else if (userAge >= 65 && destination == milano) {
    document.getElementById('final-price').innerHTML = priceFianalover65Milano.toFixed(2);
}
if (userAge < 18 && destination == torino) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsTorino.toFixed(2);
} else if (userAge >= 65 && destination == torino) {
    document.getElementById('final-price').innerHTML = priceFianalover65Torino.toFixed(2);
}
if (userAge < 18 && destination == firenze) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsFirenze.toFixed(2);
} else if (userAge >= 65 && destination == firenze) {
    document.getElementById('final-price').innerHTML = priceFianalover65Firenze.toFixed(2);
}
if (userAge < 18 && destination == bologna) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsBologna.toFixed(2);
} else if (userAge >= 65 && destination == bologna) {
    document.getElementById('final-price').innerHTML = priceFianalover65Bologna.toFixed(2);
}
if (userAge < 18 && destination == perugia) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsPerugia.toFixed(2);
} else if (userAge >= 65 && destination == perugia) {
    document.getElementById('final-price').innerHTML = priceFianalover65Perugia.toFixed(2);
}
if (userAge < 18 && destination == potenza) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsPotenza.toFixed(2);
} else if (userAge >= 65 && destination == potenza) {
    document.getElementById('final-price').innerHTML = priceFianalover65Potenza.toFixed(2);
}
if (userAge < 18 && destination == bari) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsBari.toFixed(2);
} else if (userAge >= 65 && destination == bari) {
    document.getElementById('final-price').innerHTML = priceFianalover65Bari.toFixed(2);
}
if (userAge < 18 && destination == roma) {
    document.getElementById('final-price').innerHTML = priceFianalMinorsRoma.toFixed(2);
} else if (userAge >= 65 && destination == roma) {
    document.getElementById('final-price').innerHTML = priceFianalover65Roma.toFixed(2);
}

document.getElementById("compliments").innerHTML= `Complimenti ${fullName} il tuo biglietto è pronto!!!`

// CONSOLE
console.log("l'utente ha" + " " + userAge + " " + "anni");
console.log(destination);


