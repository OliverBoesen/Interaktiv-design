
// ______________________________1920 start______________________________________________________________
// Hent elementer fra HTML
const netentyvepopup = document.getElementById('sf-popup-1900');
const netentyvepopupBtn = document.getElementById('sf-popupBtn-1900');
const netentyvecloseBtn = document.getElementById('sf-closeBtn-1900');
const netentyvetrueBtn = document.getElementById('sf-trueBtn-1900');
const netentyvefalseBtn = document.getElementById('sf-falseBtn-1900');
const netentyvestatement = document.getElementById('sf-statement-1900');
const netentyvepopupContent = document.querySelector('.sf-popup-content-1900');

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


// _1920 færdig__________________________________________________________________________________________________________________-
// ______________________________1940 start______________________________________________________________

// Hent elementer fra HTML
const netenfyrepopup = document.getElementById('sf-popup-1900');
const netenfyrepopuppopupBtn = document.getElementById('sf-popupBtn-1900');
const netenfyrepopupcloseBtn = document.getElementById('sf-closeBtn-1900');
const netenfyrepopuptrueBtn = document.getElementById('sf-trueBtn-1900');
const netenfyrepopupfalseBtn = document.getElementById('sf-falseBtn-1900');
const netenfyrepopupstatement = document.getElementById('sf-statement-1900');
const netenfyrepopuppopupContent = document.querySelector('.sf-popup-content-1900');

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
// _1940 færdig__________________________________________________________________________________________________________________-
// _1960 start__________________________________________________________________________________________________________________-
// Hent elementer fra HTML
const netentredspopup = document.getElementById('sf-popup-1900');
const netentredspopupBtn = document.getElementById('sf-popupBtn-1900');
const netentredscloseBtn = document.getElementById('sf-closeBtn-1900');
const netentredstrueBtn = document.getElementById('sf-trueBtn-1900');
const netentredsfalseBtn = document.getElementById('sf-falseBtn-1900');
const netentredsstatement = document.getElementById('sf-statement-1900');
const netentredspopupContent = document.querySelector('.sf-popup-content-1900');

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
// _1960 færdig__________________________________________________________________________________________________________________-
// _1980 start__________________________________________________________________________________________________________________-
// Hent elementer fra HTML
const netenfirspopup = document.getElementById('sf-popup-1900');
const netenfirspopupBtn = document.getElementById('sf-popupBtn-1900');
const netenfirscloseBtn = document.getElementById('sf-closeBtn-1900');
const netenfirstrueBtn = document.getElementById('sf-trueBtn-1900');
const netenfirsfalseBtn = document.getElementById('sf-falseBtn-1900');
const netenfirsstatement = document.getElementById('sf-statement-1900');
const netenfirspopupContent = document.querySelector('.sf-popup-content-1900');

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

// _1980 færdig__________________________________________________________________________________________________________________-
// _2000 start__________________________________________________________________________________________________________________-
// Hent elementer fra HTML
const totussendpopup = document.getElementById('sf-popup-1900');
const totussendpopupBtn = document.getElementById('sf-popupBtn-1900');
const totussendcloseBtn = document.getElementById('sf-closeBtn-1900');
const totussendtrueBtn = document.getElementById('sf-trueBtn-1900');
const totussendfalseBtn = document.getElementById('sf-falseBtn-1900');
const totussendstatement = document.getElementById('sf-statement-1900');
const totussendpopupContent = document.querySelector('.sf-popup-content-1900');

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
// _2000 færdig__________________________________________________________________________________________________________________-
// nu start__________________________________________________________________________________________________________________-
// Hent elementer fra HTML
const nupopup = document.getElementById('sf-popup-1900');
const nupopupBtn = document.getElementById('sf-popupBtn-1900');
const nucloseBtn = document.getElementById('sf-closeBtn-1900');
const nutrueBtn = document.getElementById('sf-trueBtn-1900');
const nufalseBtn = document.getElementById('sf-falseBtn-1900');
const nustatement = document.getElementById('sf-statement-1900');
const nupopupContent = document.querySelector('.sf-popup-content-1900');

// Vis popup når knap klikkes
nupopupBtn.addEventListener('click', () => {
  nupopup.style.display = 'block';
});

// Luk popup når luk-knap klikkes
nucloseBtn.addEventListener('click', () => {
  nupopup.style.display = 'none';
  resetPopup();
});

// Håndter svar når "Sandt" eller "Falsk" klikkes
nutrueBtn.addEventListener('click', () => {
  nustatement.innerText = 'Sandt! Det er rigtigt at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Godt gået! 🙂';
  nupopupContent.style.backgroundColor = '#477d3e'; // Ændrer baggrundsfarve til grøn
  nufalseBtn.style.backgroundColor = ''; // Nulstiller "Falsk" knappens farve
});

nufalseBtn.addEventListener('click', () => {
  nustatement.innerText = 'Du valgte falsk! Det er faktisk rigtigt nok at kvinder i adskillige årtier har skudt en smertefuld genvej for at få den eftertragtede timeglasfigur. Selvom idealet omkring 1900 var yderst kvindeligt, og man helst skulle have lidt på sidebenene, var timeglasfiguren alligevel noget, de fleste ønskede sig. Kvinder snørede derfor sig selv og hinanden ind med korsetter På den måde kunne taljen nå helt ned på omkring 47 centimeter! Du kan altid prøve igen! 🙂';
  nupopupContent.style.backgroundColor = '#520b0b'; // Ændrer baggrundsfarve til rød
  nutrueBtn.style.backgroundColor = ''; // Nulstiller "Sandt" knappens farve
});

// Nulstil baggrundsfarverne
function resetPopupColors() {
  nupopupContent.style.backgroundColor = '#9DAF93';
  nutrueBtn.style.backgroundColor = '';
  nufalseBtn.style.backgroundColor = '';
}

// Nulstil hele popup'en
function resetPopup() {
  nustatement.innerText = '';
  nupopupContent.style.backgroundColor = '#9DAF93';
  nutrueBtn.style.backgroundColor = '';
  nufalseBtn.style.backgroundColor = '';
}

// Luk popup når der klikkes uden for popup-vinduet
document.addEventListener('click', (e) => {
  if (e.target === nupopup) {
    nupopup.style.display = 'none';
    resetPopup();
  }
});

// Nulstil popup'en ved indlæsning
window.onload = resetPopup;
// nu slut__________________________________________________________________________________________________________________-
