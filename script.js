const antivirusButton = document.getElementById('antivirus-button');
const progressBar = document.querySelector('.progress-bar');
const resultText = document.getElementById('result');
const videoContainer = document.querySelector('.video-container'); // Get the video container
const videoElement = document.createElement('iframe'); // Create an iframe element

let progress = 0;
let intervalId;

document.getElementById('attiva-antivirus-button').addEventListener('click', function() {
  // Simulazione progresso barra di caricamento
  intervalId = setInterval(() => {
    progress += 5; // Aumentare il progresso del 5% ogni intervallo
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(intervalId); // Interrompere l'animazione quando il progresso raggiunge il 100%
      resultText.textContent = 'Computer Pericoloso al 100%!'; // Aggiorna il testo del risultato
      antivirusButton.textContent = 'Correggi Subito'; // Modifica il testo del pulsante
      antivirusButton.removeAttribute('hidden'); // Mostra il pulsante "Correggi Subito"
      antivirusButton.removeAttribute('disabled'); // Abilita il pulsante

      // Incorpora il video YouTube usando il codice di incorporamento
      const embedCode = '<iframe width="882" height="496" src="https://www.youtube.com/embed/xvFZjo5PgG0" title="Rick Roll (Different link + no ads)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'; // Sostituisci con il tuo codice di incorporamento YouTube
      videoElement.src = embedCode;
      videoElement.width = 200; // Regola la larghezza del video
      videoElement.height = 150; // Regola l'altezza del video
      videoElement.allowfullscreen = true; // Abilita fullscreen
      videoContainer.appendChild(videoElement); // Aggiungi l'iframe al container
    }
  }, 100); // Aggiorna la barra di caricamento ogni 100 millisecondi (regolare per la velocità)
});
