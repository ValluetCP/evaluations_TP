// -------------  COURS DOM  ---------------//

let madiv = document.getElementById("madiv");
let mic = document.getElementsByName("Michel");
let tag = document.getElementsByTagName("div");
let cls = document.getElementsByClassName("maclasse");
let selc = document.querySelector('div'); // la première <div> du code
let all = document.querySelectorAll("div");
let input = document.querySelector("input[type='submit']");

// AFFICHAGE
element.classList; // récupérer toutes les class de l'élément
element.className;
element.className = "nom"; // pour modifier une valeur
console.log(element.id); // Affiche le contenu de l'ID
element.id;

// page 28
element.innerHTML; //pour changer le contenu d'un element HTML
// page 35
nodeValue; 

// page 26
element.style.color = "red";
element.style.backgroundColor = "";

// nodeChild p 30

// page 37 et 39
createElement // Créer un élément à partir du parent
textContent // Créer du contenu textuel

// revoir page 42 <p> et non <span>
// revoir page 18 ligne 4 head et non body

//page 45 - les input



console.log(input);

if (selc.hasAttributes()) {
    console.log("a au moins un attribut");
} else {
    console.log("pas d'attribut");
}

let img = document.querySelector('img');
img.setAttribute("src", "https://img.freepik.com/photos-premium/bebe-panda-mignon-humoristique-suspendu-du-bambou_410516-25873.jpg?w=200")