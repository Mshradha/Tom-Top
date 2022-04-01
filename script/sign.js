document.querySelector("form").addEventListener("submit",login)


var reguser = JSON.parse(localStorage.getItem("signup"))


function login(){
 event.preventDefault();


 var email=document.querySelector("#email").value;
 var password=document.querySelector("#password").value;

 for(var i=0;i<reguser.length;i++){
     if(reguser[i].email===email && reguser[i].password==password){
         alert("Login Sucessful")
         window.location.href="index.html"
         break;
     }
     else{
         alert("Check Login Details....Login Failed")
     }
 }
}