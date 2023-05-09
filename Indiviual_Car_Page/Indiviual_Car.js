let UserData=JSON.parse(localStorage.getItem("Userdata"))||[];
let data=JSON.parse(localStorage.getItem("bookdata"))||[];
let photo=document.getElementById("photo");
let main=document.getElementById("main");


// let nameinp=document.getElementById("nameinp");
// let emailinp=document.getElementById("emailinp");
// let mobileinp=document.getElementById("mobileinp");
// let start=document.getElementById("start");
// let end=document.getElementById("end");
// let accinp=document.getElementById("accinp");
// let cvvinp=document.getElementById("cvvinp");


function showdata(){
    photo.innerHTML="";
    console.log(data);
    for(let i=data.length-1;i<data.length;i++){
        let carphoto=document.createElement("img");
        carphoto.className="car-photo";
        carphoto.src=data[i].image;

        let carname=document.createElement("h2");
        carname.className="car-name";
        carname.textContent=data[i].name;

        let carprice=document.createElement("h3");
        carprice.className="car-price";
        carprice.textContent=`Rs.${data[i].price}/day`;

        let p=document.createElement("p");
        p.className="normal-info";
        p.textContent=`We Highly recommend that you journey which you want to have in ${carname.textContent} would be awesome and for that we highly recommend you to kindly re-check the information that you have/going to provide before clicking on confirm button.Although the car which you are checking is of name ${carname.textContent} and is having ${data[i].seats} seats , runs on an emission of ${data[i].emission} will costs you ${carprice.textContent}. If you are satisfied with the given information then you can proceed further else can check another vehicle. Terms and Conditions applied.`

        console.log(carphoto,carname,carprice,p);
        photo.append(carphoto,carname,carprice,p);
    }
}
showdata();

let n=data.length-1;
let days=document.getElementById("days");
let sum=document.getElementById("sum");
let price=data[n].price;
console.log(days*price);
let hidden=document.getElementById("hidden");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    if(nameinp.value==""||emailinp.value==""||mobileinp.value==""||start.value==""||end.value==""||accinp.value==""||cvvinp.value==""){
        hidden.textContent="Please Fill all the details";
    }
    else{
        alert(`You Have Successfully booked a vehicle with a name ${data[n].name} . You will recieve the respective notifications as well.`);
        setTimeout(function(){
            window.location.href = '..//index.html';
           },3000)
    }
    
});

days.addEventListener("input",function(){
    sum.value=days.value*price;
})

let gstarted=document.getElementById("gstarted");
    gstarted.addEventListener("click",function(){
        window.location.href="..//GetStarted/getstarted.html";
})