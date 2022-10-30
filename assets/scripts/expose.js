// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let audio = document.getElementsByTagName('audio')[0], confetti = false;

  // CHANGE HORN IMAGE
  document.getElementById('horn-select').addEventListener('change', function(e) {
    let selected = e.target.value;
    let hornImg = document.getElementById('expose').getElementsByTagName('img')[0];
    confetti = false;
    if (selected == 'air-horn') {
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "Air Horn Image";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (selected == 'car-horn') {
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "Car Horn Image";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (selected == 'party-horn') {
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "Party Horn Image";
      audio.src = "assets/audio/party-horn.mp3";
      confetti = true;
    }
  });

  // CHANGE VOLUME ICON
  document.getElementById('volume').addEventListener('mouseup', function() {
    let volumeIcon = document.getElementById('volume-controls').getElementsByTagName('img')[0];
    if (this.value == 0) {
      // console.log('0');
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (this.value < 33) {
      // console.log('1');
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (this.value < 67) {
      // console.log('2');
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      // console.log('3');
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
    audio.volume = this.value / 100.0;
  });

  // PLAY SOUND ON BUTTON PRESS
  document.getElementsByTagName('button')[0].addEventListener('click', function() {
    audio.play();
    if (confetti) { jsConfetti.addConfetti(); }
  });
}