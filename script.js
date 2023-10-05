var igrac = document.getElementById("igrac");
var blok = document.getElementById("blok");

function skok() {
    if(igrac.classList != "animacija") {
    igrac.classList.add("animacija");
}
    setTimeout(function(){
        igrac.classList.remove("animacija");
    },500);
}
var provjera = setInterval(function(){
    var igracTop =
    parseInt (window.getComputedStyle(igrac).getPropertyValue("top"));
    var blokLeft =
    parseInt (window.getComputedStyle(blok).getPropertyValue("left"));
    if(blokLeft<20 && blokLeft>0 && igracTop>=130){
        blok.style.animation ="none;"
        blok.style.display ="none;"
        alert("GameOver");
    }
},10);