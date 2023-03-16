
/*ici on déclare nos variable : 1 pour le menu en lui 
et les 2 autres pour l'ouverture et la fermeture du menu*/
var sidenav = document.getElementById("mySidenav"); 
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

/* attribution du déclencheur pour nos deux futurs fonction*/

openBtn.onclick = openNav;  
closeBtn.onclick = closeNav;

/* on a plus qu'a créer nos deux fonctions 
pour que notre menu apparaisse ou disparaisse 
au click sur les bouttons qu'on veux*/

function openNav() {
  sidenav.classList.add("active");
}


function closeNav() {
  sidenav.classList.remove("active");
}