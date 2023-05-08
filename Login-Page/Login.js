let data = JSON.parse(localStorage.getItem("signupdata")) || [];
let submit = document.getElementById("submit");
submit.addEventListener("click", checkdata);
function checkdata(e) {
    e.preventDefault();
    let flag = false;
    let cont = document.getElementById("cont");
    let pass = document.getElementById("pass");
    for (let i = data.length - 1; i < data.length; i++) {
        if (cont.value == data[i].number || cont.value == data[i].email && pass.value == data[i].password) {
            flag = true;
        }
    }
    if (cont.value == "admin@gmail.com" && pass.value == "admin") {
        alert("Welcome Admin");
        window.location.href = "..//Admin_Page/admin.html";
    }
    else {
        if (flag === true) {
            alert("Your Provided information is Correct.You are being redirected to Homepage");
            window.location.href = "..//index.html";
        }
        else {
            alert("Please Provide Correct Information for Logging In");
        }
    }
}