function goto(page){
    page.preventDefault()
    if(page =="logo"){
        window.locatiSon.href = '/index.html'
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

let gstarted=document.getElementById("gstarted");
    gstarted.addEventListener("click",function(){
        window.location.href="./GetStarted/getstarted.html";
})

let win=document.getElementById("win");
    win.addEventListener("click",function(){
        window.location.href="./GetStarted/getstarted.html";
})

let book=document.getElementById("book");
book.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let bus=document.getElementById("bus1");
bus.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let bus2=document.getElementById("bus2");
bus2.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let bus3=document.getElementById("bus3");
bus3.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let bus4=document.getElementById("bus4");
bus4.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let bus5=document.getElementById("bus5");
bus5.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let bus6=document.getElementById("bus6");
bus6.addEventListener("click",function(){
  window.location.href="..//Bus_Page/Bus.html";
})

let sales=document.getElementById("sales");
sales.addEventListener("click",function(){
  window.location.href="..//About_contact/contact.html";
})

let book2=document.getElementById("book2");
book2.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book3=document.getElementById("book3");
book3.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book4=document.getElementById("book4");
book4.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book5=document.getElementById("book5");
book5.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book6=document.getElementById("book6");
book6.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book7=document.getElementById("book7");
book7.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book8=document.getElementById("book8");
book8.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book9=document.getElementById("book9");
book9.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})

let book10=document.getElementById("book10");
book10.addEventListener("click",function(){
  window.location.href="..//Cars_Page/Cars.html";
})