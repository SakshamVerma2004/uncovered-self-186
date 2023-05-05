let data=JSON.parse(localStorage.getItem("bookdata"))||[];

let main=document.getElementById("main");
fetchdata();
function fetchdata(){
    fetch("https://carsapi-mauve.vercel.app/data")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        appenddata(data);
    })
}


function appenddata(data){
    main.innerHTML="";
    let cardlist=document.createElement("div");
    cardlist.className="card-list";
    main.append(cardlist);

    data.forEach(function(item){
        cardlist.append(createcard(item));
    })
}


function createcard(item){
    let card=document.createElement("div");
    card.className="card";
    card.setAttribute("data-id",item.id);

    let cardimg=document.createElement("div");
    cardimg.className="card-img";

    let img=document.createElement("img");
    img.className="car-image";
    img.src=item.image;
    img.setAttribute("alt","cars");

    cardimg.append(img);

    let cardbody=document.createElement("div");
    cardbody.className="card-body";

    let ratingimg=document.createElement("img");
    ratingimg.src="https://th.bing.com/th/id/OIP.ZlCJ0TGNGLIMu8XwbrAzRwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    ratingimg.className="logo-img";

    let rating=document.createElement("p");
    rating.className="rating";
    rating.textContent=`Ratings - ${item.ratings} `;

    let trips=document.createElement("p");
    trips.className="trips";
    trips.textContent=` (${item.trips} Trips)`;

    cardbody.append(ratingimg,rating,trips);

    let carname=document.createElement("div");
    carname.className="car-name";

    let car=document.createElement("h3");
    car.textContent=item.name;

    let extra=document.createElement("p");
    extra.textContent=`${item.type} - ${item.emission} - ${item.seats} seats`;

    carname.append(car,extra);

    let price=document.createElement("div");
    price.className="price";

    let money=document.createElement("h2");
    money.textContent=`Rs.${item.price}/day`;
    money.className="money";

    let booknow=document.createElement("button");
    booknow.className="book";
    booknow.textContent="Book Now";

    booknow.addEventListener("click",function(){
        let obj={
            name:item.name,
            price:item.price,
            image:item.image,
            trips:item.trips,
            seats:item.seats,
            emission:item.emission,
        }
        data.push(obj);
        localStorage.setItem("bookdata",JSON.stringify(data));
        console.log(data);
        alert("Car Added to Booking Page");
        window.location.href="#";
    });

    price.append(money,booknow);

    card.append(cardimg,cardbody,carname,price);
    return card;
}

let sort1=document.getElementById("lth");
sort1.addEventListener("click",sortlth);
function sortlth(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?_sort=price&_order=asc`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        appenddata(data);
    })
    .catch(function(error){
        console.log(error);
    })
}

let sort2=document.getElementById("htl");
sort2.addEventListener("click",sorthtl);
function sorthtl(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?_sort=price&_order=desc`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        appenddata(data);
    })
    .catch(function(error){
        console.log(error);
    })
}

let sedan=document.getElementById("sedan");
sedan.addEventListener("click",fsedan);
function fsedan(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?category=sedan`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      appenddata(data);
    })
    .catch(function(error){
      console.log(error);
    })
}

let suv=document.getElementById("suv");
suv.addEventListener("click",fsuv);
function fsuv(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?category=SUV`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      appenddata(data);
    })
    .catch(function(error){
      console.log(error);
    })
}

let luxury=document.getElementById("luxury");
luxury.addEventListener("click",fluxury);
function fluxury(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?category=luxury`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      appenddata(data);
    })
    .catch(function(error){
      console.log(error);
    })
}

let hatchback=document.getElementById("hatchback");
hatchback.addEventListener("click",fhatchback);
function fhatchback(e){
    e.preventDefault();
    fetch(`https://carsapi-mauve.vercel.app/data?category=Hatchback`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      appenddata(data);
    })
    .catch(function(error){
      console.log(error);
    })
}

let all=document.getElementById("all");
all.addEventListener("click",fetchdata);
let All =document.getElementById("All");
All.addEventListener("click",fetchdata);

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchCars);

function searchCars(e) {
    e.preventDefault();
    let input = document.getElementById("search").value.toUpperCase();
    let filteredCars = [];
    fetch(`https://carsapi-mauve.vercel.app/data`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.length; i++) {
            let carName = data[i].name.toUpperCase();
            if (carName.includes(input)) {
                filteredCars.push(data[i]);
            }
        }
        appenddata(filteredCars);
    })
    .catch(function(error) {
        console.log(error);
    })
}
