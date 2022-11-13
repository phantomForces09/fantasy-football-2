let energyTeam = 0;

//localStorage.setItem("energy", 0);
function start(){
    let test = 0;
    energyTeam=test;
    document.getElementById("teamEnergy").innerHTML = energyTeam;
}
function train(){
    energyTeam+=1;
    document.getElementById("teamEnergy").innerHTML = energyTeam;
    localStorage.setItem("energy", energyTeam);
}
function logout(){
    window.location.replace("index.html");
}
function saveTeam(){
    localStorage.setItem("quarterback", document.getElementById("quarterback").value);
    localStorage.setItem("runningback", document.getElementById("runner").value);
    localStorage.setItem("widereceiver", document.getElementById("wide").value);
    localStorage.setItem("guard", document.getElementById("guard").value);
    document.getElementById("q").innerHTML = "<b>Quarterback:</b>" + localStorage.getItem("quarterback");
    document.getElementById("r").innerHTML = "<b>Running Back:</b>" + localStorage.getItem("runningback");
    document.getElementById("w").innerHTML = "<b>Wide Receiver:</b>" + localStorage.getItem("widereceiver");
    document.getElementById("g").innerHTML = "<b>Guard:</b>" + localStorage.getItem("guard");
}