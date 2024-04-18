// script.js

// Hent elementer fra HTML
const popup = document.getElementById('sf-popup');
const popupBtn = document.getElementById('sf-popupBtn');
const closeBtn = document.getElementById('sf-closeBtn');
const trueBtn = document.getElementById('sf-trueBtn');
const falseBtn = document.getElementById('sf-falseBtn');
const statement = document.getElementById('sf-statement');
const popupContent = document.querySelector('.sf-popup-content');

// Vis popup når knap klikkes
popupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
trueBtn.addEventListener('click', () => {
  statement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! :)';
  popupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  falseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

falseBtn.addEventListener('click', () => {
  statement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! :)';
  popupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  trueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  popupContent.style.backgroundColor = '#9DAF93';
  trueBtn.style.backgroundColor = '';
  falseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  statement.innerText = '';
  popupContent.style.backgroundColor = '#9DAF93';
  trueBtn.style.backgroundColor = '';
  falseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;













