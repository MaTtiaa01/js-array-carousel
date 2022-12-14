//Consegna:
//Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
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
    slidesEl.insertAdjacentHTML("beforeend", slideMarkup)

}//MILESTONE 3
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// attraverso i pulsanti devo scorrere le immagini
//utilizzo addEventListener e for per poter togliere e riassegnare la classe active
const buttonUp = document.querySelector(".btn_up")

buttonUp.addEventListener("click", function(){
    console.log("next");

    
        
        
        
        const slides = document.querySelectorAll(".slide > img");
        let currentImg = slides[imgActive];
        console.log(currentImg);
        currentImg.classList.remove("active");
        imgActive++;
        
        //modificare la slide successiva
        const nextSlide = slides[imgActive];
        console.log(nextSlide);
        nextSlide.classList.add('active');
    
    
})





const bottonDown = document.querySelector(".btn_down")

bottonDown.addEventListener("click", function(){
    console.log("next");
    const slides = document.querySelectorAll(".slide > img");
    let currentImg = slides [imgActive];
    console.log(currentImg);
    currentImg.classList.remove("active");
    imgActive--

    const preSlide = slides[imgActive];
    preSlide.classList.add("active");
    

})