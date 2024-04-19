// Hent elementer fra HTML
// Nittentredive
const nittentredivepopup = document.getElementById('sf-popup-1930');
const nittentredivepopupBtn = document.getElementById('sf-popupBtn-1930');
const nittentredivecloseBtn = document.getElementById('sf-closeBtn-1930');
const nittentredivetrueBtn = document.getElementById('sf-trueBtn-1930');
const nittentredivefalseBtn = document.getElementById('sf-falseBtn-1930');
const nittentredivestatement = document.getElementById('sf-statement-1930');
const nittentredivepopupContent = document.querySelector('.sf-popup-content-1930');

// Vis popup når knap klikkes
nittentredivepopupBtn.addEventListener('click', () => {
  nittentredivepopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittentredivecloseBtn.addEventListener('click', () => {
  nittentredivepopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittentredivetrueBtn.addEventListener('click', () => {
  nittentredivestatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  nittentredivepopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  nittentredivefalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittentredivefalseBtn.addEventListener('click', () => {
  nittentredivestatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  nittentredivepopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  nittentredivetrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittentredivepopupContent.style.backgroundColor = '#9DAF93';
  nittentredivetrueBtn.style.backgroundColor = '';
  nittentredivefalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittentredivestatement.innerText = '';
  nittentredivepopupContent.style.backgroundColor = '#9DAF93';
  nittentredivetrueBtn.style.backgroundColor = '';
  nittentredivefalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittentredivepopup) {
    nittentredivepopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// Nittenhalvtreds
// Hent elementer fra HTML
const nittenhalvtredspopup = document.getElementById('sf-popup-1950');
const nittenhalvtredspopupBtn = document.getElementById('sf-popupBtn-1950');
const nittenhalvtredscloseBtn = document.getElementById('sf-closeBtn-1950');
const nittenhalvtredstrueBtn = document.getElementById('sf-trueBtn-1950');
const nittenhalvtredsfalseBtn = document.getElementById('sf-falseBtn-1950');
const nittenhalvtredsstatement = document.getElementById('sf-statement-1950');
const nittenhalvtredspopupContent = document.querySelector('.sf-popup-content-1950');

// Vis popup når knap klikkes
nittenhalvtredspopupBtn.addEventListener('click', () => {
  nittenhalvtredspopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittenhalvtredscloseBtn.addEventListener('click', () => {
  nittenhalvtredspopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittenhalvtredstrueBtn.addEventListener('click', () => {
  nittenhalvtredsstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  nittenhalvtredspopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  nittenhalvtredsfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittenhalvtredsfalseBtn.addEventListener('click', () => {
  nittenhalvtredsstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  nittenhalvtredspopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  nittenhalvtredstrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittenhalvtredspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvtredstrueBtn.style.backgroundColor = '';
  nittenhalvtredsfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittenhalvtredsstatement.innerText = '';
  nittenhalvtredspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvtredstrueBtn.style.backgroundColor = '';
  nittenhalvtredsfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittenhalvtredspopup) {
    nittenhalvtredspopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// Nittenhalvfjers
// Hent elementer fra HTML
const nittenhalvfjerspopup = document.getElementById('sf-popup-1970');
const nittenhalvfjerspopupBtn = document.getElementById('sf-popupBtn-1970');
const nittenhalvfjerscloseBtn = document.getElementById('sf-closeBtn-1970');
const nittenhalvfjerstrueBtn = document.getElementById('sf-trueBtn-1970');
const nittenhalvfjersfalseBtn = document.getElementById('sf-falseBtn-1970');
const nittenhalvfjersstatement = document.getElementById('sf-statement-1970');
const nittenhalvfjerspopupContent = document.querySelector('.sf-popup-content-1970');

// Vis popup når knap klikkes
nittenhalvfjerspopupBtn.addEventListener('click', () => {
  nittenhalvfjerspopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittenhalvfjerscloseBtn.addEventListener('click', () => {
  nittenhalvfjerspopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittenhalvfjerstrueBtn.addEventListener('click', () => {
  nittenhalvfjersstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  nittenhalvfjerspopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  nittenhalvfjersfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittenhalvfjersfalseBtn.addEventListener('click', () => {
  nittenhalvfjersstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  nittenhalvfjerspopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  nittenhalvfjerstrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittenhalvfjerspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvfjerstrueBtn.style.backgroundColor = '';
  nittenhalvfjersfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittenhalvfjersstatement.innerText = '';
  nittenhalvfjerspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvfjerstrueBtn.style.backgroundColor = '';
  nittenhalvfjersfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittenhalvfjerspopup) {
    nittenhalvfjerspopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// Nittenhalvfems

// Hent elementer fra HTML
const nittenhalvfemspopup = document.getElementById('sf-popup-1990');
const nittenhalvfemspopupBtn = document.getElementById('sf-popupBtn-1990');
const nittenhalvfemscloseBtn = document.getElementById('sf-closeBtn-1990');
const nittenhalvfemstrueBtn = document.getElementById('sf-trueBtn-1990');
const nittenhalvfemsfalseBtn = document.getElementById('sf-falseBtn-1990');
const nittenhalvfemsstatement = document.getElementById('sf-statement-1990');
const nittenhalvfemspopupContent = document.querySelector('.sf-popup-content-1990');

// Vis popup når knap klikkes
nittenhalvfemspopupBtn.addEventListener('click', () => {
  nittenhalvfemspopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittenhalvfemscloseBtn.addEventListener('click', () => {
  nittenhalvfemspopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittenhalvfemstrueBtn.addEventListener('click', () => {
  nittenhalvfemsstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  nittenhalvfemspopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  nittenhalvfemsfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittenhalvfemsfalseBtn.addEventListener('click', () => {
  nittenhalvfemsstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  nittenhalvfemspopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  nittenhalvfemstrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittenhalvfemspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvfemstrueBtn.style.backgroundColor = '';
  nittenhalvfemsfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittenhalvfemsstatement.innerText = '';
  nittenhalvfemspopupContent.style.backgroundColor = '#9DAF93';
  nittenhalvfemstrueBtn.style.backgroundColor = '';
  nittenhalvfemsfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittenhalvfemspopup) {
    nittenhalvfemspopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// Tyveti
// Hent elementer fra HTML
const tyvetipopup = document.getElementById('sf-popup-2010');
const tyvetipopupBtn = document.getElementById('sf-popupBtn-2010');
const tyveticloseBtn = document.getElementById('sf-closeBtn-2010');
const tyvetitrueBtn = document.getElementById('sf-trueBtn-2010');
const tyvetifalseBtn = document.getElementById('sf-falseBtn-2010');
const tyvetistatement = document.getElementById('sf-statement-2010');
const tyvetipopupContent = document.querySelector('.sf-popup-content-2010');

// Vis popup når knap klikkes
tyvetipopupBtn.addEventListener('click', () => {
  tyvetipopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
tyveticloseBtn.addEventListener('click', () => {
  tyvetipopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
tyvetitrueBtn.addEventListener('click', () => {
  tyvetistatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  tyvetipopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  tyvetifalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

tyvetifalseBtn.addEventListener('click', () => {
  tyvetistatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  tyvetipopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  tyvetitrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  tyvetipopupContent.style.backgroundColor = '#9DAF93';
  tyvetitrueBtn.style.backgroundColor = '';
  tyvetifalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  tyvetistatement.innerText = '';
  tyvetipopupContent.style.backgroundColor = '#9DAF93';
  tyvetitrueBtn.style.backgroundColor = '';
  tyvetifalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === tyvetipopup) {
    tyvetipopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;