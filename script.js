// DOM Elemente
const truthButton = document.querySelector('.truth-button');
const dareButton = document.querySelector('.dare-button');
const chatBubbles = document.querySelector('.chat-bubbles');

const playButton = document.querySelector('.play-button');
const gameSection = document.querySelector('.game-section');
const languageSelect = document.getElementById('language-select');



//  Sprachcode holen
function getSelectedLanguage() {
  return languageSelect.value || 'en'; // fallback: englisch
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

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', type); // `type` = truth oder dare
    bubble.textContent = text;
  
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
