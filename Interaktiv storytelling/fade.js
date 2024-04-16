document.addEventListener("DOMContentLoaded", function() {
    const section1900 = document.getElementById("1910");
    const container1900 = document.querySelector(".container-1910");
    const img1900 = document.querySelector(".img-1910");
    const tekst1900 = document.querySelector(".tekst-1910");
    const body = document.querySelector("body");
  
    function handleFade() {
      const sectionTop = section1900.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Hvis sektionen er inden for synsfeltet
      if (sectionTop < windowHeight / 2 && sectionTop > -windowHeight / 2) {
        container1900.classList.add("fade-in");
        img1900.classList.add("fade-in");
        tekst1900.classList.add("fade-in");
        body.classList.add("fade-in");
      } else {
        container1900.classList.remove("fade-in");
        img1900.classList.remove("fade-in");
        tekst1900.classList.remove("fade-in");
        body.classList.remove("fade-in");
      }
    }
  
    window.addEventListener("scroll", handleFade);
  });



  window.addEventListener('scroll', function() {
    var element = document.getElementById('.img-1900');
    var elementPosition = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        fadeIn(element);
    }
});

function fadeIn(element) {
    element.style.opacity = 1; // Sæt gennemsigtigheden til 1 for at fade ind
    element.style.clipPath = "inset(0 0 10% 0)"; // Beskær billedet for at vise en del af den nederste halvdel
}
  


