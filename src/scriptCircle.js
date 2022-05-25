import {createdBoard} from './components/appOval.js';
import data from './data/geometry/dataCircle.js';
let geometryImages= data.items;
let board= createdBoard(geometryImages);
const father = document.getElementById("father");
father.appendChild(board);
let cardList= document.querySelectorAll('.wrap .card');
cardList.forEach(element =>{
element.addEventListener ('click', function(e) {
 element.classList.toggle("toggleCard");
   checkCards(e);
});
});
    //Revisando cartas
    let count = 0;
    const modal= document.querySelector(".modal");
const checkCards = (e) => {
const clickedCard = e.target;
clickedCard.classList.add("flippedCard")
const flipped = document.querySelectorAll(".flippedCard");

  if (flipped.length == 2) {
    
    if (flipped[0].getAttribute("name") === flipped[1].getAttribute("name")){
      count++;
      flipped.forEach((clickedCard) => {
        clickedCard.classList.remove("flippedCard")
        clickedCard.style.pointerEvents= "none";
        if (count === 4) {
          modal.classList.add("modal--show");
        }
      });
    } else {
      flipped.forEach((clickedCard) => {
      clickedCard.classList.remove("flippedCard")
      setTimeout(() => clickedCard.classList.remove("toggleCard"), 500)})
    }
    }
  } 