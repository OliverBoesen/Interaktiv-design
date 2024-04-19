// script.js

// 1900

// Hent elementer fra HTML
const nittennulnulPopup = document.getElementById('sf-popup-1900');
const nittennulnulPopupBtn = document.getElementById('sf-popupBtn-1900');
const nittennulnulCloseBtn = document.getElementById('sf-closeBtn-1900');
const nittennulnultrueBtn = document.getElementById('sf-trueBtn-1900');
const nittennulnulfalseBtn = document.getElementById('sf-falseBtn-1900');
const nittennulnulstatement = document.getElementById('sf-statement-1900');
const nittennulnulpopupContent = document.querySelector('.sf-popup-content-1900');

// Vis popup når knap klikkes
nittennulnulPopupBtn.addEventListener('click', () => {
  nittennulnulPopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittennulnulCloseBtn.addEventListener('click', () => {
  nittennulnulPopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittennulnultrueBtn.addEventListener('click', () => {
  nittennulnulstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! :)';
  nittennulnulpopupContent.style.backgroundColor = '#8ce68c'; // Ændrer baggrundsfarve til grøn
  nittennulnulfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittennulnulfalseBtn.addEventListener('click', () => {
  nittennulnulstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! :)';
  nittennulnulpopupContent.style.backgroundColor = '#ef5d53'; // Ændrer baggrundsfarve til rød
  nittennulnultrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittennulnulpopupContent.style.backgroundColor = '#9DAF93';
  nittennulnultrueBtn.style.backgroundColor = '';
  nittennulnulfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittennulnulstatement.innerText = '';
  nittennulnulpopupContent.style.backgroundColor = '#9DAF93';
  nittennulnultrueBtn.style.backgroundColor = '';
  nittennulnulfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittennulnulPopup) {
    nittennulnulPopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;


// 1910


// Hent elementer fra HTML
const nittentipopup = document.getElementById('sf-popup-1910');
const nittentipopupBtn = document.getElementById('sf-popupBtn-1910');
const nittenticloseBtn = document.getElementById('sf-closeBtn-1910');
const nittentitrueBtn = document.getElementById('sf-trueBtn-1910');
const nittenti = document.getElementById('sf-falseBtn-1910');
const nittentistatement = document.getElementById('sf-statement-1910');
const nittentipopupContent = document.querySelector('.sf-popup-content-1910');

// Vis popup når knap klikkes
nittentipopupBtn.addEventListener('click', () => {
  nittentipopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nittenticloseBtn.addEventListener('click', () => {
  nittentipopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nittentitrueBtn.addEventListener('click', () => {
  nittentistatement.innerText = 'Det er faktisk falsk! Omkring Første Verdenskrig nåede frigørelsen af kvinderne nye højder i mere end en forstand. De fik nemlig stemmeret i 1915 og samtidig begyndte de gradvist at løsne en smule op for de stramme korsetter. :)';
  nittentipopupContent.style.backgroundColor = '#ef5d53'; // Ændrer baggrundsfarve til rød
  nittenti.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nittenti.addEventListener('click', () => {
  nittentistatement.innerText = 'Det er nemlig falsk! Omkring Første Verdenskrig nåede frigørelsen af kvinderne nye højder i mere end en forstand. De fik nemlig stemmeret i 1915 og samtidig begyndte de gradvist at løsne en smule op for de stramme korsetter.:)';
  nittentipopupContent.style.backgroundColor = '#8ce68c'; // Ændrer baggrundsfarve til grøn
  nittentitrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nittentipopupContent.style.backgroundColor = '#9DAF93';
  nittentitrueBtn.style.backgroundColor = '';
  nittenti.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nittentistatement.innerText = '';
  nittentipopupContent.style.backgroundColor = '#9DAF93';
  nittentitrueBtn.style.backgroundColor = '';
  nittenti.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nittentipopup) {
    nittentipopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;


// 1920

// Hent elementer fra HTML
const netentyvepopup = document.getElementById('sf-popup-1920');
const netentyvepopupBtn = document.getElementById('sf-popupBtn-1920');
const netentyvecloseBtn = document.getElementById('sf-closeBtn-1920');
const netentyvetrueBtn = document.getElementById('sf-trueBtn-1920');
const netentyvefalseBtn = document.getElementById('sf-falseBtn-1920');
const netentyvestatement = document.getElementById('sf-statement-1920');
const netentyvepopupContent = document.querySelector('.sf-popup-content-1920');

// Vis popup når knap klikkes
netentyvepopupBtn.addEventListener('click', () => {
  netentyvepopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
netentyvecloseBtn.addEventListener('click', () => {
  netentyvepopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
netentyvetrueBtn.addEventListener('click', () => {
  netentyvestatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  netentyvepopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  netentyvefalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

netentyvefalseBtn.addEventListener('click', () => {
  netentyvestatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  netentyvepopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  netentyvetrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  netentyvepopupContent.style.backgroundColor = '#9DAF93';
  netentyvetrueBtn.style.backgroundColor = '';
  netentyvefalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  netentyvestatement.innerText = '';
  netentyvepopupContent.style.backgroundColor = '#9DAF93';
  netentyvetrueBtn.style.backgroundColor = '';
  netentyvefalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === netentyvepopup) {
    netentyvepopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;


// 1930

// Hent elementer fra HTML
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


// 1940

// Hent elementer fra HTML
const netenfyrepopup = document.getElementById('sf-popup-1940');
const netenfyrepopuppopupBtn = document.getElementById('sf-popupBtn-1940');
const netenfyrepopupcloseBtn = document.getElementById('sf-closeBtn-1940');
const netenfyrepopuptrueBtn = document.getElementById('sf-trueBtn-1940');
const netenfyrepopupfalseBtn = document.getElementById('sf-falseBtn-1940');
const netenfyrepopupstatement = document.getElementById('sf-statement-1940');
const netenfyrepopuppopupContent = document.querySelector('.sf-popup-content-1940');

// Vis popup når knap klikkes
netenfyrepopuppopupBtn.addEventListener('click', () => {
  netenfyrepopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
netenfyrepopupcloseBtn.addEventListener('click', () => {
  netenfyrepopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
netenfyrepopuptrueBtn.addEventListener('click', () => {
  netenfyrepopupstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  netenfyrepopuppopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  netenfyrepopupfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

netenfyrepopupfalseBtn.addEventListener('click', () => {
  netenfyrepopupstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  netenfyrepopuppopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  netenfyrepopuptrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  netenfyrepopuppopupContent.style.backgroundColor = '#9DAF93';
  netenfyrepopuptrueBtn.style.backgroundColor = '';
  netenfyrepopupfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  netenfyrepopupstatement.innerText = '';
  netenfyrepopuppopupContent.style.backgroundColor = '#9DAF93';
  netenfyrepopuptrueBtn.style.backgroundColor = '';
  netenfyrepopupfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === netenfyrepopup) {
    netenfyrepopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;


// 1950

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


// 1960

// Hent elementer fra HTML
const netentredspopup = document.getElementById('sf-popup-1960');
const netentredspopupBtn = document.getElementById('sf-popupBtn-1960');
const netentredscloseBtn = document.getElementById('sf-closeBtn-1960');
const netentredstrueBtn = document.getElementById('sf-trueBtn-1960');
const netentredsfalseBtn = document.getElementById('sf-falseBtn-1960');
const netentredsstatement = document.getElementById('sf-statement-1960');
const netentredspopupContent = document.querySelector('.sf-popup-content-1960');

// Vis popup når knap klikkes
netentredspopupBtn.addEventListener('click', () => {
  netentredspopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
netentredscloseBtn.addEventListener('click', () => {
  netentredspopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
netentredstrueBtn.addEventListener('click', () => {
  netentredsstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  netentredspopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  netentredsfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

netentredsfalseBtn.addEventListener('click', () => {
  netentredsstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  netentredspopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  netentredstrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  netentredspopupContent.style.backgroundColor = '#9DAF93';
  netentredstrueBtn.style.backgroundColor = '';
  netentredsfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  netentredsstatement.innerText = '';
  netentredspopupContent.style.backgroundColor = '#9DAF93';
  netentredstrueBtn.style.backgroundColor = '';
  netentredsfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === netentredspopup) {
    netentredspopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// 1970

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

// 1980

// Hent elementer fra HTML
const netenfirspopup = document.getElementById('sf-popup-1980');
const netenfirspopupBtn = document.getElementById('sf-popupBtn-1980');
const netenfirscloseBtn = document.getElementById('sf-closeBtn-1980');
const netenfirstrueBtn = document.getElementById('sf-trueBtn-1980');
const netenfirsfalseBtn = document.getElementById('sf-falseBtn-1980');
const netenfirsstatement = document.getElementById('sf-statement-1980');
const netenfirspopupContent = document.querySelector('.sf-popup-content-1980');

// Vis popup når knap klikkes
netenfirspopupBtn.addEventListener('click', () => {
  netenfirspopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
netenfirscloseBtn.addEventListener('click', () => {
  netenfirspopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
netenfirstrueBtn.addEventListener('click', () => {
  netenfirsstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  netenfirspopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  netenfirsfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

netenfirsfalseBtn.addEventListener('click', () => {
  netenfirsstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  netenfirspopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  netenfirstrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  netenfirspopupContent.style.backgroundColor = '#9DAF93';
  netenfirstrueBtn.style.backgroundColor = '';
  netenfirsfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  netenfirsstatement.innerText = '';
  netenfirspopupContent.style.backgroundColor = '#9DAF93';
  netenfirstrueBtn.style.backgroundColor = '';
  netenfirsfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === netenfirspopup) {
    netenfirspopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// 1990

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

// 2000

// Hent elementer fra HTML
const totussendpopup = document.getElementById('sf-popup-2000');
const totussendpopupBtn = document.getElementById('sf-popupBtn-2000');
const totussendcloseBtn = document.getElementById('sf-closeBtn-2000');
const totussendtrueBtn = document.getElementById('sf-trueBtn-2000');
const totussendfalseBtn = document.getElementById('sf-falseBtn-2000');
const totussendstatement = document.getElementById('sf-statement-2000');
const totussendpopupContent = document.querySelector('.sf-popup-content-2000');

// Vis popup når knap klikkes
totussendpopupBtn.addEventListener('click', () => {
  totussendpopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
totussendcloseBtn.addEventListener('click', () => {
  totussendpopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
totussendtrueBtn.addEventListener('click', () => {
  totussendstatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  totussendpopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  totussendfalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

totussendfalseBtn.addEventListener('click', () => {
  totussendstatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  totussendpopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  totussendtrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  totussendpopupContent.style.backgroundColor = '#9DAF93';
  totussendtrueBtn.style.backgroundColor = '';
  totussendfalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  totussendstatement.innerText = '';
  totussendpopupContent.style.backgroundColor = '#9DAF93';
  totussendtrueBtn.style.backgroundColor = '';
  totussendfalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === totussendpopup) {
    totussendpopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;

// 2010

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




















