function goto(page){
    page.preventDefault()
    if(page =="logo"){
        window.location.href = '/index.html'
    }
}

function expandOptions(e){
    e.querySelector('div').style.display = 'flex'
   }   
   function closeOptions(e){
    e.querySelector('div').style.display = 'none'
}

// -------------------navbar-name----------------------//
document.addEventListener('DOMContentLoaded', function() {
    const selector = '.nav__link';
    const elems = Array.from( document.querySelectorAll( selector ) );
    const navigation = document.getElementById('content');
    
    function makeActive( evt ) {
      const target = evt.target;
      
      if ( !target || !target.matches( selector ) ) {
        return;
      }
      
      elems.forEach( elem => elem.classList.remove( 'active' ) );
        
        evt.target.classList.add( 'active' );
    };
    
    
    navigation.addEventListener( 'click', makeActive );
    
    
    } );

    //------------------- slider-----------------------------//
  // Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide,
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -(
  (cardCount / 3) * carouselWidth +
  cardMarginRight * (cardCount / 3) -
  carouselWidth -
  cardMarginRight
);

// Add the click events
leftButton.addEventListener("click", function () {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

rightButton.addEventListener("click", function () {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});