// Hent lottie-player elementet
const lottiePlayer = document.querySelector('lottie-player');

// Tilføj klikhændelse til lottie-player
lottiePlayer.addEventListener('click', () => {
  // Find det element, du vil scrolle ned til (med id "1910")
  const elementToScrollTo = document.getElementById('1910');

  // Scroll ned til elementet med en jævn animation
  elementToScrollTo.scrollIntoView({
    behavior: 'smooth'
  });
});
