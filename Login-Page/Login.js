let data=JSON.parse(localStorage.getItem("signupdata"))||[];
let submit=document.getElementById("submit");
submit.addEventListener("click",checkdata);
function checkdata(e){
    e.preventDefault();
    let flag=0;
    let cont=document.getElementById("cont");
    let pass=document.getElementById("pass");
    for(let i=0;i<data.length;i++){
        if(cont.value==data[i].number||cont.value==data[i].email && pass.value==data[i].password){
            flag=1;
        }
    }
    if(cont.value=="admin@gmail.com" && pass.value=="admin"){
        window.location.href="#";
    }
    if(flag==1){
        alert("Your Provided information is Correct.You are being redirected to Homepage");
        window.location.href="#";
    }
    else{
        alert("Please Provide Correct Information for Logging In");
    }
}