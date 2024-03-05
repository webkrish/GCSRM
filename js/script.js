let password = document.getElementById("password")
let toggle = document.getElementById("cpassword")

function show() {
    if(password.type == "password"){
        password.type = "text"
    } else{
        password.type = "password"
    }
}
function hide() {
    if(toggle.type == "password"){
        toggle.type = "text"
    } else{
        toggle.type = "password"
    }
}