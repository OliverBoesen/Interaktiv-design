//1900

var lydAfspiller = document.getElementById("lydAfspiller1900");
    var lydKnappen = document.getElementById("lydKnappen1900");
    var knapBillede = document.getElementById("lydKnapBillede");

    lydKnappen.addEventListener("click", function() {
        if (lydAfspiller.paused) {
            lydAfspiller.play();
            knapBillede.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
        } else {
            lydAfspiller.pause();
            lydAfspiller.currentTime = 0;
            knapBillede.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
        }
    });


   // 1910

   // VI havde problemer med at alle musik afspillere ikke virkede begrund af denne
   // Derfor har vi gives var navnet q1, så virkede det...

   var q1 = document.getElementById("lydAfspiller1910");
   var q1Knap = document.getElementById("lydKnappen1910");
   var q1Lyd = document.getElementById("nittentiLyd");

   q1Knap.addEventListener("click", function() {
       if (q1.paused) {
        q1.play();
        q1Lyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
       } else {
        q1.pause();
        q1.currentTime = 0;
        q1Lyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
       }
   });


// 1920

var nittentyve = document.getElementById("lydAfspiller1920");
   var nittentyveKnap = document.getElementById("lydKnappen1920");
   var nittentyveLyd = document.getElementById("nittentyveLyd");

   nittentyveKnap.addEventListener("click", function() {
       if (nittentyve.paused) {
        nittentyve.play();
        nittentyveLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
       } else {
        nittentyve.pause();
        nittentyve.currentTime = 0;
        nittentyveLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
       }
   });


   // 1930

   var nittentredive = document.getElementById("lydAfspiller1930");
   var nittentrediveKnap = document.getElementById("lydKnappen1930");
   var nittentrediveLyd = document.getElementById("nittentrediveLyd");

   nittentrediveKnap.addEventListener("click", function() {
       if (nittentredive.paused) {
        nittentredive.play();
        nittentrediveLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
       } else {
        nittentredive.pause();
        nittentredive.currentTime = 0;
        nittentrediveLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
       }
   });

// 1940

var nittenfyrre = document.getElementById("lydAfspiller1940");
var nittenfyrreKnap = document.getElementById("lydKnappen1940");
var nittenfyrreLyd = document.getElementById("nittenfyrreLyd");

nittenfyrreKnap.addEventListener("click", function() {
    if (nittenfyrre.paused) {
     nittenfyrre.play();
     nittenfyrreLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittenfyrre.pause();
     nittenfyrre.currentTime = 0;
     nittenfyrreLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 1950

var nittenhalvtreds = document.getElementById("lydAfspiller1950");
var nittenhalvtredsKnap = document.getElementById("lydKnappen1950");
var nittenhalvtredsLyd = document.getElementById("nittenhalvtredsLyd");

nittenhalvtredsKnap.addEventListener("click", function() {
    if (nittenhalvtreds.paused) {
     nittenhalvtreds.play();
     nittenhalvtredsLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittenhalvtreds.pause();
     nittenhalvtreds.currentTime = 0;
     nittenhalvtredsLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 1960

var nittentreds = document.getElementById("lydAfspiller1960");
var nittentredsKnap = document.getElementById("lydKnappen1960");
var nittentredsLyd = document.getElementById("nittentredsLyd");

nittentredsKnap.addEventListener("click", function() {
    if (nittentreds.paused) {
     nittentreds.play();
     nittentredsLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittentreds.pause();
     nittentreds.currentTime = 0;
     nittentredsLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 1970

var nittenhalvfjerds = document.getElementById("lydAfspiller1970");
var nittenhalvfjerdsKnap = document.getElementById("lydKnappen1970");
var nittenhalvfjerdsLyd = document.getElementById("nittenhalvfjerdsLyd");

nittenhalvfjerdsKnap.addEventListener("click", function() {
    if (nittenhalvfjerds.paused) {
     nittenhalvfjerds.play();
     nittenhalvfjerdsLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittenhalvfjerds.pause();
     nittenhalvfjerds.currentTime = 0;
     nittenhalvfjerdsLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 1980

var nittenfirs = document.getElementById("lydAfspiller1980");
var nittenfirsKnap = document.getElementById("lydKnappen1980");
var nittenfirsLyd = document.getElementById("nittenfirsLyd");

nittenfirsKnap.addEventListener("click", function() {
    if (nittenfirs.paused) {
     nittenfirs.play();
     nittenfirsLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittenfirs.pause();
     nittenfirs.currentTime = 0;
     nittenfirsLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 1990

var nittenhalvfems = document.getElementById("lydAfspiller1990");
var nittenhalvfemsKnap = document.getElementById("lydKnappen1990");
var nittenhalvfemsLyd = document.getElementById("nittenhalvfemsLyd");

nittenhalvfemsKnap.addEventListener("click", function() {
    if (nittenhalvfems.paused) {
     nittenhalvfems.play();
     nittenhalvfemsLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
     nittenhalvfems.pause();
     nittenhalvfems.currentTime = 0;
     nittenhalvfemsLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

// 2000

var tyvenulnul = document.getElementById("lydAfspiller2000");
var tyvenulnulKnap = document.getElementById("lydKnappen2000");
var tyvenulnulLyd = document.getElementById("tyvenulnulLyd");

tyvenulnulKnap.addEventListener("click", function() {
    if (tyvenulnul.paused) {
      tyvenulnul.play();
      tyvenulnulLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
      tyvenulnul.pause();
      tyvenulnul.currentTime = 0;
      tyvenulnulLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});

//2010

var tyveti = document.getElementById("lydAfspiller2010");
var tyvetiKnap = document.getElementById("lydKnappen2010");
var tyvetiLyd = document.getElementById("tyvetiLyd");

tyvetiKnap.addEventListener("click", function() {
    if (tyveti.paused) {
      tyveti.play();
      tyvetiLyd.src = "img/lydknap_fra.png"; // Ændrer billedkilden til pause-billede
    } else {
      tyveti.pause();
      tyveti.currentTime = 0;
      tyvetiLyd.src = "img/lydknap.png"; // Ændrer billedkilden tilbage til start-billede
    }
});


   // backup
//document.getElementById("lydKnappen190").addEventListener("click", function () {
  //var lydAfspiller = document.getElementById("lydAfspiller190");
  //if (lydAfspiller.paused) {
    //lydAfspiller.play();
  //} else {
    //lydAfspiller.pause();
    //lydAfspiller.currentTime = 0; // Sætter afspillerens tid tilbage til starten
  //}
//});


  