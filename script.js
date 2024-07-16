const antivirusButton = document.getElementById('antivirus-button');
const videoContainer = document.getElementById('video-container');
const progressBar = document.querySelector('.progress-bar'); // Select the progress bar element

antivirusButton.addEventListener('click', function() {
  // Nascondere il pulsante antivirus (Hide antivirus button)
  antivirusButton.style.display = 'none';

  // Simulate progress bar animation
  let progress = 0;
  const intervalId = setInterval(() => {
    progress += 5; // Increase progress by 5% each interval
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(intervalId); // Stop animation when progress reaches 100%
      // Show video container
      videoContainer.style.display = 'block';

      // Incorporate the YouTube video (replace with your video link)
      const videoURL = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
      const videoHTML = `<iframe width="100%" height="300%" src="${videoURL}" title="Malware Protector - Rimozione Virus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      videoContainer.innerHTML = videoHTML;
    }
  }, 100); // Update progress bar every 100 milliseconds (adjust for speed)
});
