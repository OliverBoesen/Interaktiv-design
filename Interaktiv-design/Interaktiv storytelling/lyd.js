// Hent knappen og lydafspilleren
var knap = document.getElementById("lydKnappen");
var lyd = document.getElementById("lydAfspiller");

lyd.volume = 1;

// Tjek om lyden allerede afspiller, og hvis den gør, stop den og start forfra
knap.addEventListener("click", function() {
  if (lyd.paused) {
    lyd.play();
    knap.innerHTML = "Stop Lyd";
  } else {
    lyd.pause();
    lyd.currentTime = 0;
    knap.innerHTML = "Afspil Lyd";
  }
});
