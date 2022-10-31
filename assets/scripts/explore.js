// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let accent = null;
  
  // FILL VOICES DROPDOWN
  window.speechSynthesis.onvoiceschanged = function() {
    const voices = window.speechSynthesis.getVoices();
    let dropdown = document.getElementById('voice-select');

    for (let i = 0; i < voices.length; i++) {
      let opt = document.createElement('option');
      opt.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      opt.setAttribute('id', 'voice-' + i);
      opt.setAttribute('data-lang', voices[i].lang);
      opt.setAttribute('data-name', voices[i].name);
      dropdown.appendChild(opt);
    }
  }

  // SET SELECTED VOICE
  document.getElementById('voice-select').addEventListener('change', function(e) {
    let selected = e.target.value.split(/(\s+)/)[0];
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selected) {
        accent = voices[i];
      }
    }
  });

  // PLAY TEXT ON BUTTON CLICK
  document.getElementsByTagName('button')[0].addEventListener('click', function() {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
    utterance.voice = accent;
    synth.speak(utterance);
    let face = document.getElementsByTagName('img')[0];
    if (synth.speaking) {
      face.src = "assets/images/smiling-open.png";
      face.alt = "Smiling Open Face";
    }
    utterance.addEventListener('end', function (e) {
      face.src = "assets/images/smiling.png";
      face.alt = "Smiling Face";
    });
  });



}