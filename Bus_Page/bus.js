let mainSection=document.getElementById("bus_data")


let busURL="https://bus-api-henna.vercel.app/busData"


function fetchBusData(){
    fetch(busURL)
    .then(res=>{return res.json()})
    .then((data)=>{appendBusData(data)})
    .catch((err)=>{console.log(err)})
}

function appendBusData(data){
    mainSection.innerHTML=""
    let card_list=document.createElement("div")
    card_list.className="card-list"
    mainSection.append(card_list)

    data.forEach(item => {
        card_list.append(createBusCard(item))
    });
}

function createBusCard(item){
    let card=document.createElement("div")
    card.className="card"

    let imgDiv=document.createElement("div")
    imgDiv.className="bus-image"
    let img=document.createElement("img")
    img.src=item.image
    img.setAttribute("alt","img")

    imgDiv.append(img)

    let cardBody=document.createElement("div")
    cardBody.className="card-Body"

    let cardRate=document.createElement("p")
    cardRate.className="card-rate"
    cardRate.textContent=`${item.ratings}${`(${item.trips} Trips)`}`

    let title=document.createElement("h3")
    title.className="card-title"
    title.textContent=item.name

    let Busdetails=document.createElement("p")
    Busdetails.className="detail-bus"
    Busdetails.textContent=``
}