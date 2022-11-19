let energyTeam = 0;
//localStorage.setItem("energy", 0);
function reset(){
    let restart = 0;
    energyTeam=restart;
    document.getElementById("teamEnergy").innerHTML = restart;
}
function train(){
    energyTeam-=1;
    document.getElementById("teamEnergy").innerHTML = energyTeam;
    localStorage.setItem("energy", energyTeam);
}
function logout(){
    window.location.replace("index.html");
}
function saveTeam(){
    if(energyTeam>20){
        localStorage.setItem("quarterback", document.getElementById("quarterback").value);
        localStorage.setItem("runningback", document.getElementById("runner").value);
        localStorage.setItem("widereceiver", document.getElementById("wide").value);
        localStorage.setItem("guard", document.getElementById("guard").value);
        document.getElementById("list").innerHTML = "<b>Quarterback: </b>" + localStorage.getItem("quarterback") + "<br><b>Runningback: </b>" + localStorage.getItem("runningback") + "<br><b>Wide Receiver: </b>" + localStorage.getItem("widereceiver") + "<br><b>Guard: </b>" + localStorage.getItem("guard");
        energyTeam-=20;
        document.getElementById("teamEnergy").innerHTML = energyTeam;
        localStorage.setItem("energy", energyTeam);
    }else{
        alert("you don't have enough credits, dumbass");
    }
}
function createTeam(){
    let teamName = prompt("rename team!");
    localStorage.setItem("teamName", teamName);
    document.getElementById("teamName").innerHTML = localStorage.getItem("teamName");
    document.title = "FFII | " + localStorage.getItem("username") + "'s " + localStorage.getItem("teamName");
}
function newGame(){
    document.getElementById("energy").innerHTML = "loser";
}