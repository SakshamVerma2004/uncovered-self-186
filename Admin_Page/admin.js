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
    addCarsfun()
});
function addCarsfun(){
    let Cobj={
        "ratings": ratings.value,
        "trips": trips.value,
        "name": name.value,
        "type": type.value,
        "emission": emission.value,
        "seats": seats.value,
        "price": price.value,
        "image": image.value,
        "category": category.value,
        "airbags": airbags.value,
        "sunroof": sunroof.value,
        "cruisecontrol": CruiseControl.value,
        "camera": Camera.value,
        "ac": ac.value
      }
    let response=fetch("https://carsapi-mauve.vercel.app/data", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Cobj)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        appenddata(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}


let ABratings=document.getElementById("ABratings");
let ABtrips=document.getElementById("ABtrips");
let ABname=document.getElementById("ABname");
let ABemission=document.getElementById("ABemission");
let ABseats=document.getElementById("ABseats");
let ABprice=document.getElementById("ABprice");
let ABimage=document.getElementById("ABimage");
let ABcategory=document.getElementById("ABcategory");
let ABCamera=document.getElementById("ABCamera");
let ABac=document.getElementById("ABac");
addBus.addEventListener("click",function(){
    console.log(data);
    addBusfun()
});

function addBusfun(){
    let Bobj={
        "ratings": ABratings.value,
        "trips": ABtrips.value,
        "name": ABname.value,
        "emission": ABemission.value,
        "seats": ABseats.value,
        "price": ABprice.value,
        "image": ABimage.value,
        "category": ABcategory.value,
        "camera": ABCamera.value,
        "ac": ABac.value
      }
    let response=fetch("https://bus-api-henna.vercel.app/busData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Bobj)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        appendBdata(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

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
        EditCar(item.id)
    });

    price.append(money,booknow);

    card.append(cardimg,cardbody,busname,price);
    return card;
}
//EDIT CAR
let ECratings=document.getElementById("ECratings");
let ECtrips=document.getElementById("ECtrips");
let ECname=document.getElementById("ECname");
let ECtype=document.getElementById("ECtype");
let ECemission=document.getElementById("ECemission");
let ECseats=document.getElementById("ECseats");
let ECprice=document.getElementById("ECprice");
let ECimage=document.getElementById("ECimage");
let ECcategory=document.getElementById("ECcategory");
let ECairbags=document.getElementById("ECairbags");
let ECsunroof=document.getElementById("ECsunroof");
let ECCruiseControl=document.getElementById("ECCruiseControl");
let ECCamera=document.getElementById("ECCamera");
let ECac=document.getElementById("ECac");
let EaddCarsBtn=document.getElementById("EaddCarsBtn");
EaddCarsBtn.addEventListener("click",function(){
    //EditCar(carid.value)
})

function EditCar(id){
    let ECOBJ={
        "ratings": ECratings.value,
        "trips": ECtrips.value,
        "name": ECname.value,
        "type": ECtype.value,
        "emission": ECemission.value,
        "seats": ECseats.value,
        "price": ECprice.value,
        "image": ECimage.value,
        "category": ECcategory.value,
        "airbags": ECairbags.value,
        "sunroof": ECsunroof.value,
        "cruisecontrol": ECCruiseControl.value,
        "camera": ECCamera.value,
        "ac": ECac.value
      }
    let response=fetch(`https://carsapi-mauve.vercel.app/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ECOBJ)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

//EDIT BUS
let EditBusBtn=document.getElementById("EditBusBtn");
EditBusBtn.addEventListener("click",function(){
    EditBus(Busid.value)
})
function EditBus(id){
    let EBOBJ={
        "ratings": document.getElementById("EBratings").value,
        "trips": document.getElementById("EBtrips").value,
        "name": document.getElementById("EBname").value,
        "emission": document.getElementById("EBemission").value,
        "seats": document.getElementById("EBseats").value,
        "price": document.getElementById("EBprice").value,
        "image": document.getElementById("EBimage").value,
        "category": document.getElementById("EBcategory").value,
        "camera": document.getElementById("EBCamera").value,
        "ac": document.getElementById("EBac").value
        }
    let response=fetch(`https://bus-api-henna.vercel.app/busData/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(EBOBJ)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
      })
      .catch(error => {
        console.error( error);
      });
}