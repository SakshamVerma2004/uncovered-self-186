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
  
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -(
  (cardCount / 3) * carouselWidth +
  cardMarginRight * (cardCount / 3) -
  carouselWidth -
  cardMarginRight
);

//---------------Add the click events-------------------//
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