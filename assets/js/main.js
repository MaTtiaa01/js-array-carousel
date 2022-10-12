//Consegna:
//Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const slides = [
    './img/01.webp.jpg',
    './img/02.webp.jpg',
    './img/03.webp.jpg',
    './img/04.webp.jpg',
    './img/05.webp.jpg'
]

console.log(slides);
//MILESTONE 1
//Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


//MILESTONE 2
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


// seleziono l'immagine 
let imgActive = 0;

console.log(imgActive);
//seleziono il tag della DOM in qui andanno le varie immagini
const slidesEl = document.querySelector(".slide");

//inserisco l'img selezionata dentro la DOM in modo dinamico 
for (let i = 0; i < slides.length; i++) {
    const slideImg = slides[i];
    const slideMarkup = `<img  class="${i === imgActive ? "active" : "" }"src="${slideImg}" alt="">`
    slidesEl.innerHTML = slideMarkup;

}
// attraverso i pulsanti devo scorrere le immagini
//utilizzo addEventListener e for per poter togliere e riassegnare la classe active
const buttonUp = document.querySelector(".btn_up")

//buttonUp.addEventListener("click", function(){})




//MILESTONE 3
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.