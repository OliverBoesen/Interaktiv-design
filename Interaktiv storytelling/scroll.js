
// Scrool knap "Udforsk tidslinje" - Scroller ned til 1900
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".udforsk-tidslinje");
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(1900);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });

// Tidslinje Scroll knap - Ruller ned til 1900
document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll("#scroll-1900");

  scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(1900);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});


// Tidslinje Scroll knap - Ruller ned til 1910
document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll("#scroll-1910");

  scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(1910);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

