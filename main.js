const cardBoard = document.querySelector("#cardboard");
const images = [
'angular.svg',
'aurelia.svg',
'vue.svg',
'react.svg',
'backbone.svg',
'ember.svg'
];

let cardHTML = '';

images.forEach(img => {
 cardHTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front-face" src="img/${img}">
        <img class="back-face" src="img/js-badge.svg">
    </div>
    `;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;

function flipCard() {
    this.classList.add("flip");

    if (!firstCard) {
     firstCard = this;

     return false;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    console.log(isMatch);
}

function disableCards(){
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}
cards.forEach(card => card.addEventListener("click", flipCard));