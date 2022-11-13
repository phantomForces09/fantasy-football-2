function loginRequest(){
    const usernameRequest = document.getElementById("username").value;
    const passwordRequest = document.getElementById("password").value;
    if(usernameRequest == "proPianist1124" && passwordRequest == "gimichi#"){
        localStorage.setItem("username", usernameRequest);
        console.log(localStorage.getItem("username"));
        window.location.replace("success.html");
    }else{
        window.location.replace("invalid.html");
    }
}