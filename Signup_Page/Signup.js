let data = JSON.parse(localStorage.getItem("signupdata")) || [];
let submit = document.getElementById("submit");
submit.addEventListener("click", savedata);
function savedata(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let hidden = document.getElementById("hidden");
    if (name.value === "" || number.value === "" || email.value === "" || password.value === "") {
        hidden.innerText = "Please Fill all the details";
    }
    else {
        let obj={
            name:name.value,
            number:number.value,
            email:email.value,
            password:password.value
        }
        hidden.style.display = "none";
        data.push(obj);
        localStorage.setItem("signupdata",JSON.stringify(data));
        console.log(data);
        window.location.href="..//Login-Page/Login.html";
    }
}