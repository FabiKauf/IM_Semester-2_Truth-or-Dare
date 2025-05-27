// DOM Elemente
const truthButton = document.querySelector('.truth-button');
const dareButton = document.querySelector('.dare-button');
const chatBubbles = document.querySelector('.chat-bubbles');

const playButton = document.querySelector('.play-button');
const gameSection = document.querySelector('.game-section');

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
  const response = await fetch('https://api.truthordarebot.xyz/v1/truth');
  const data = await response.json();
  addBubble(data.question, 'truth');
}

async function fetchDare() {
  const response = await fetch('https://api.truthordarebot.xyz/api/dare');
  const data = await response.json();
  addBubble(data.question, 'dare');
}

// Event Listener
truthButton.addEventListener('click', fetchTruth);
dareButton.addEventListener('click', fetchDare);
