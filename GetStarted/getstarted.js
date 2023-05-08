const button = document.getElementById('enterDetailsbtn');
const form = document.getElementById('myForm');

button.addEventListener('click', function() {
  form.style.display = 'grid';
});

window.addEventListener('click', function(event) {
    event.preventDefault()
    if (event.target == form) {
      form.style.display = 'none';
    }
  });

let detailsSubmitBtn=document.getElementById("detailsSubmitBtn");
detailsSubmitBtn.addEventListener("click",function(){
    let UserData=[]
    let obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        days:document.getElementById("days").value,
        fromdate:document.getElementById("fromdate").value,
        from:document.getElementById("from").value,
        Destination:document.getElementById("Destination").value,
        tilldate:document.getElementById("tilldate").value
    }
    UserData.push(obj)
    localStorage.setItem("UserData",JSON.stringify(UserData));
    window.location.reload()
})

let home=document.getElementById("home");
home.addEventListener("click",function(){
  window.location.href="..//index.html";
})