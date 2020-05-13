function register() {
    var login= document.querySelector("#login");
    var register= document.querySelector("#register");

    login.style.width="0";
    login.style.transition="0s"
    login.style.display="none";
    register.style.width="100%";
    register.style.transition="0s";
    
}

function login() {
    var login= document.querySelector("#login");
    var register= document.querySelector("#register");

    login.style.width="100%";
    login.style.transition="0s";
    login.style.display="block";
    register.style.width="0";
    register.style.transition="0.0s";
}