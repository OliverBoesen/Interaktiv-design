// Lyt efter scrollhændelser
window.addEventListener('scroll', function() {
  // Find det 1900-afsnit
  var section1900 = document.getElementById('1900');
  // Find det tilsvarende tekstelement på tidslinjen
  var text1900 = document.querySelector('.point-year[data-year="1900"]');
  
  // Tjek om 1900-afsnittet er synligt på skærmen
  var sectionRect = section1900.getBoundingClientRect();
  if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      // Tilføj en klasse til det tilsvarende tekstelement på tidslinjen
      text1900.classList.add('active');
  } else {
      // Fjern klassen hvis afsnittet ikke er synligt
      text1900.classList.remove('active');
  }
});