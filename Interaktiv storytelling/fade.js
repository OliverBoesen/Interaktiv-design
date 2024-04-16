//--------------------------------
// Fader fra grøn til blå, når man kommer fra "1900" ned til "1910"
//--------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const section1910 = document.getElementById("1910");
    const container1910 = document.querySelector(".container-1910");
    const img1910 = document.querySelector(".img-1910");
    const tekst1910 = document.querySelector(".tekst-1910");
    const body = document.querySelector("body");
  
    function handleFade() {
      const sectionTop = section1910.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
              
      // Hvis sektionen er inden for synsfeltet
      if (sectionTop < windowHeight / 2 && sectionTop > -windowHeight / 2) {
        container1910.classList.add("fade-in");
        img1910.classList.add("fade-in");
        tekst1910.classList.add("fade-in");
        body.classList.add("fade-in");
      }   else {
        container1910.classList.remove("fade-in");
        img1910.classList.remove("fade-in");
        tekst1910.classList.remove("fade-in");
        body.classList.remove("fade-in");
      }
    }
  
    window.addEventListener("scroll", handleFade);
  });
