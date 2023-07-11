// Banner

let images = [
  // "panda1.jpg", // (version1)
  // "panda2.jpg",

  "img/background.jpg", // (version2)
  "img/background2.jpg",
];

let curentIndex = 0;

// JS
setInterval(() => {
  // document.getElementById("banner").style.backgroundImage = "url(imgs/panda1.jpg)"; // chemin traditionnel
  curentIndex++;
  if (curentIndex == images.length) {
    curentIndex = 0;
  }
  // document.getElementById("banner").style.backgroundImage = "url(imgs/"+images[curentIndex]+")";  (version1)

  document.getElementById("banner").style.backgroundImage =
    "url(" + images[curentIndex] + ")"; // (version2)
}, 15000);

// DATE PICKIER

$(document).ready(function () {
  $("#defaultDate").datepicker();
});


/* SLIDE TOGGLE */

$("#toggleButton").click(function () {
  $(".myDiv").slideToggle();
});

/* CAROUSSEL */

// voiture 1
let curentIndex2 = 0;

let image = [
  "img/vehicule1.png",
  "img/vehicule2.png",
  "img/vehicule3.png",
  "img/vehicule4.png",
];

$(".prev").click(() => {
  curentIndex2--;
  if (curentIndex2 < 0) {
    curentIndex2 = image.length - 1;
  }
  $(".bg").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });

  console.log(image[curentIndex2]);
});

$(".next").click(() => {
  curentIndex2++;
  if (curentIndex2 == image.length) {
    curentIndex2 = 0;
  }
  $(".bg").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });
  console.log(image[curentIndex2]);
});



// voiture 2
$(".prev2").click(() => {
  curentIndex2--;
  if (curentIndex2 < 0) {
    curentIndex2 = image.length - 1;
  }
  $(".bg2").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });

  console.log(image[curentIndex2]);
});

$(".next2").click(() => {
  curentIndex2++;
  if (curentIndex2 == image.length) {
    curentIndex2 = 0;
  }
  $(".bg2").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });
  console.log(image[curentIndex2]);
});


// voiture 3
$(".prev3").click(() => {
  curentIndex2--;
  if (curentIndex2 < 0) {
    curentIndex2 = image.length - 1;
  }
  $(".bg3").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });

  console.log(image[curentIndex2]);
});

$(".next3").click(() => {
  curentIndex2++;
  if (curentIndex2 == image.length) {
    curentIndex2 = 0;
  }
  $(".bg3").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });
  console.log(image[curentIndex2]);
});


// voiture 4
$(".prev4").click(() => {
  curentIndex2--;
  if (curentIndex2 < 0) {
    curentIndex2 = image.length - 1;
  }
  $(".bg4").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });

  console.log(image[curentIndex2]);
});

$(".next4").click(() => {
  curentIndex2++;
  if (curentIndex2 == image.length) {
    curentIndex2 = 0;
  }
  $(".bg4").css({
    backgroundImage: "url(" + image[curentIndex2] + ")",
  });
  console.log(image[curentIndex2]);
});
