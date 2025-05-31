// DOM Elemente
const truthButton = document.querySelector('.truth-button');
const dareButton = document.querySelector('.dare-button');
const chatBubbles = document.querySelector('.chat-bubbles');

const playButton = document.querySelector('.play-button');
const gameSection = document.querySelector('.game-section');
const languageSelect = document.getElementById('language-select');

const modal = document.getElementById('language-modal');
const languageButton = document.querySelector('.language-button');
const modalOptions = modal.querySelectorAll('li');

let selectedLanguage = 'en'; // Standardmäßig Englisch

// Öffnet das Sprachmenü
languageButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Aktualisiert die ausgewählte Sprache und schließt das Menü
modalOptions.forEach(option => {
  option.addEventListener('click', () => {
    selectedLanguage = option.dataset.lang; // Sprachcode speichern
    languageButton.textContent = option.textContent; // Button-Text aktualisieren
    modal.style.display = 'none'; // Modal schließen
  });
});

// Schließt das Modal, wenn außerhalb geklickt wird
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Funktion: Gibt die aktuell ausgewählte Sprache zurück
function getSelectedLanguage() {
  return selectedLanguage; // Rückgabe der globalen Variable
}

playButton.addEventListener('click', () => {
  gameSection.classList.add('active');
  gameSection.scrollIntoView({ behavior: 'smooth' }); // optional, für sanftes Scrollen
});

// Funktion: Fensterbreite prüfen (für Max-Bubbles)
function getMaxBubbles() {
  const width = window.innerWidth;
  return width >= 768 ? 3 : 2; // Tablet/Desktop: 3, sonst: 2
}

// Funktion: Neue Sprechblase hinzufügen
function addBubble(text, type) {
  const chatBubbles = document.querySelector('.chat-bubbles');
  const bubble = document.createElement('div');
  bubble.className = `bubble ${type}`;
  bubble.textContent = text; // Nur den Text ohne Sprachcode hinzufügen
  chatBubbles.appendChild(bubble);

  // Falls zu viele Sprechblasen: die älteste entfernen
  while (chatBubbles.children.length > getMaxBubbles()) {
    chatBubbles.removeChild(chatBubbles.firstChild);
  }
}

// API-Abruf
async function fetchTruth() {
  const lang = getSelectedLanguage();
  try {
    const response = await fetch('https://api.truthordarebot.xyz/api/truth');
    const data = await response.json();
    if (lang == "en") {
      addBubble(data.question || "Could not load a Truth. Please try again.", 'truth');
    } else {
      if (data.translations[lang] == null) {
        addBubble("Could not load a Truth. Please try again.", 'truth');
      } else {
        addBubble(data.translations[lang], 'truth');
      }
    }
  } catch (error) {
    addBubble("Could not load a Truth. Please try again.", 'truth');
  }
}

  async function fetchDare() {
    const lang = getSelectedLanguage();
    try {
      const response = await fetch('https://api.truthordarebot.xyz/api/dare');
      const data = await response.json();
      if (lang == "en") {
        addBubble(data.question || "Could not load a Dare. Please try again.", 'dare');
      } else {
        if (data.translations[lang] == null) {
          addBubble("Could not load a Dare. Please try again.", 'dare');
        } else {
          addBubble(data.translations[lang], 'dare');
        }
      }
    } catch (error) {
      addBubble("Could not load a Dare. Please try again.", 'dare');
    }
  }


// Event Listener
truthButton.addEventListener('click', fetchTruth);
dareButton.addEventListener('click', fetchDare);
