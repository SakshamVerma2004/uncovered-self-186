let ratings=document.getElementById("ratings");
let trips=document.getElementById("trips");
let name=document.getElementById("name");
let type=document.getElementById("type");
let emission=document.getElementById("emission");
let seats=document.getElementById("seats");
let price=document.getElementById("price");
let image=document.getElementById("image");
let category=document.getElementById("category");
let airbags=document.getElementById("airbags");
let sunroof=document.getElementById("sunroof");
let CruiseControl=document.getElementById("CruiseControl");
let Camera=document.getElementById("Camera");
let ac=document.getElementById("ac");
let addCars=document.getElementById("addCarsBtn");
let addBus=document.getElementById("addBusBtn");

addCars.addEventListener("click",function(){
    console.log("Cars")
});
addBus.addEventListener("click",function(){
    console.log("Bus")
});

//********************************* */
let data=JSON.parse(localStorage.getItem("bookdata"))||[];

let main=document.getElementById("dataContainer");
let carid=document.getElementById("ECID");

let fetchCarsData=document.getElementById("carsData")
fetchCarsData.addEventListener("click",function(){
    fetchCardata();
})

function fetchCardata(){
    fetch("https://carsapi-mauve.vercel.app/data")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
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

    let editData=document.createElement("button");
    editData.className="edit";
    editData.textContent="EDIT...!";

    editData.addEventListener("click",function(){
        carid.value=item.id
        console.log(item.id)
    });

    price.append(money,editData);
    card.append(cardimg,cardbody,carname,price);
    return card;
}
// ----------------------//
//**************bus */
let BusURl="https://bus-api-henna.vercel.app/busData"

let Data=JSON.parse(localStorage.getItem("bookdata"))||[];
let Busid=document.getElementById("EBID");
let fetchBusData=document.getElementById("busData")
fetchBusData.addEventListener("click",function(){
    fetchBdata();
})

function fetchBdata(){
    fetch(`https://bus-api-henna.vercel.app/busData`)
    .then(function(res){
        return res.json();
    })
    .then(function(Data){
        console.log(Data);
        appendBdata(Data);
    })
}

function appendBdata(data){
    main.innerHTML="";
    let cardlist=document.createElement("div");
    cardlist.className="card-list";
    main.append(cardlist);

    data.forEach(function(item){
        cardlist.append(createBcard(item));
    })
}


function createBcard(item){
    let card=document.createElement("div");
    card.className="card";
    card.setAttribute("data-id",item.id);

    let cardimg=document.createElement("div");
    cardimg.className="card-img";

    let img=document.createElement("img");
    img.className="bus-image";
    img.src=item.image;
    img.setAttribute("alt","bus");

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

    let busname=document.createElement("div");
    busname.className="bus-name";

    let bus=document.createElement("h3");
    bus.textContent=item.name;

    let extra=document.createElement("p");
    extra.textContent=`${item.category} - ${item.emission} - ${item.seats} seats`;

    busname.append(bus,extra);

    let price=document.createElement("div");
    price.className="price";

    let money=document.createElement("h2");
    money.textContent=`Rs.${item.price}/day`;
    money.className="money";

    let booknow=document.createElement("button");
    booknow.className="book";
    booknow.textContent="EDIT...!";

    booknow.addEventListener("click",function(){
        Busid.value=item.id
        console.log("Bus",item.id)
    });

    price.append(money,booknow);

    card.append(cardimg,cardbody,busname,price);
    return card;
}
