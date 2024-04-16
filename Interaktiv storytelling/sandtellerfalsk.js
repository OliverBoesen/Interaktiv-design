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
  statement.innerText = 'Dit svar var: Sandt';
  popupContent.style.backgroundColor = 'green'; // Ændrer baggrundsfarve til grøn
  falseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

falseBtn.addEventListener('click', () => {
  statement.innerText = 'Dit svar var: Falsk';
  popupContent.style.backgroundColor = 'red'; // Ændrer baggrundsfarve til rød
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
  statement.innerText = 'Dit svar vil blive vist her.';
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

