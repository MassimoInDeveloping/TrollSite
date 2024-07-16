const antivirusButton = document.getElementById('antivirus-button');
const progressBar = document.querySelector('.progress-bar');
const resultText = document.getElementById('result');

let progress = 0;
let intervalId;

antivirusButton.addEventListener('click', function() {
  // Simulazione progresso barra di caricamento
  intervalId = setInterval(() => {
    progress += 5; // Aumentare il progresso del 5% ogni intervallo
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(intervalId); // Interrompere l'animazione quando il progresso raggiunge il 100%
      resultText.textContent = 'Computer Pericoloso al 100%!'; // Aggiorna il testo del risultato
      antivirusButton.textContent = 'Correggi Subito'; // Modifica il testo del pulsante
      antivirusButton.removeAttribute('disabled'); // Abilita il pulsante
    }
  }, 100); // Aggiorna la barra di caricamento ogni 100 millisecondi (regolare per la velocità)
});
