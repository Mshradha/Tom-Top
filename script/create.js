document.querySelector("form").addEventListener("submit",signUp)

var userData=JSON.parse(localStorage.getItem("userCreds"))|| []
function signUp(){
    event.preventDefault();
    

    var userObj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    };
    userData.push(userObj);

    localStorage.setItem("signup",JSON.stringify(userData))
}