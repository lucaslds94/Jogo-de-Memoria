const cardBoard = document.querySelector("#cardboard");

const images = [
    'carta1.jpg',
    'carta2.jpg',
    'carta3.jpg',
    'carta4.jpg',
    'carta1.jpg',
    'carta2.jpg',
    'carta3.jpg',
    'carta4.jpg'
];

function shuffle(images) {
    let currentIndex = images.length;
    let randomIndex;
    let temporaryValue;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
}

shuffle(images);


let cardHTML = '';

images.forEach(img => {
    cardHTML +=`
    <div class="memory-card">
    <img class="front-face" src="img/${img}">
    <img class="back-face"src="img/verso.jpg">
    </div>
    `
});

cardBoard.innerHTML = cardHTML;

const cards = document.querySelectorAll('.memory-card');

function flipCard(){
    let cardOne, cardTwo;

    this.classList.add("flip");
    this.classList.add("active")
    
    let flips = document.querySelectorAll('.flip')
    let elCards = document.querySelectorAll('.active')

 function ifDelayed() {
    if(elCards.length == 2){
        cardOne = elCards[0].children[0].attributes[1].nodeValue
        cardTwo = elCards[1].children[0].attributes[1].nodeValue

       if(cardOne === cardTwo){
            elCards[0].classList.remove('active')
            elCards[1].classList.remove('active')
            console.log('Acertou')
        } else {            
            console.log('errou')
            elCards[0].classList.remove('active')
            elCards[1].classList.remove('active')
            elCards[1].classList.remove('flip')
            elCards[0].classList.remove('flip')
        }
    }
}
    setTimeout(ifDelayed, 400);
    
    function winMsg(){
    if(flips.length === 8) {
       alert("Voce ganhou")
    }
}
winMsg()
//setinterval(winMsg(), 400) 
//console.log(elCard)
}

function verifica(cardOne, cardTwo) {
    if(cardOne === cardTwo){
        return true
    } else {
        return false
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));