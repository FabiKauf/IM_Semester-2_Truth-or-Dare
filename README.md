# IM_Semester-2_Truth-or-Dare
Kurzbeschreibung des Projekts: 
Unsere Webseite bietet ein digitales „Truth or Dare“-Spiel, das per API zufällige Fragen oder Aufgaben anzeigt. Nutzer*innen können zwischen „Wahrheit (Truth)“ und „Pflicht (Dare)“ wählen sowie die Sprache (Deutsch, Englisch, Französisch, Spanisch) umstellen. Die App ist in HTML, CSS und JavaScript programmiert. Das Design soll zum Spielen animieren und ist somit in passenden knalligen komplementär Farben gestaltet. Somit ist unsere Webseite perfekt für deinen nächsten Spiele-Abend.

Learnings und Schwierigkeiten 
Sheryn: Die Sprachstruktur der API war anfangs verwirrend. Da "translations" alleine verschachtelt ist, bereitete es uns mühe beim Spiel die Sprache zu wechseln. Bei einigen Sprachen kam im Spiel ab und zu ein leerer Punkt ("null"). Dies mussten wir umgehen. 


Beispiel: {
  "translations": {
    "bn": "আপনি কি করেছেন সবচেয়ে স্বতঃস্ফূর্ত জিনিস কি?",
    "de": "Was ist das Spontanste, was du je gemacht hast?",
    "es": "¿Qué es lo más espontáneo que has hecho?",
    "fr": "Quelle est la chose la plus spontanée que vous ayez jamais faite ?",
    "hi": "आपने अब तक सबसे सहज चीज़ क्या की है?",
    "tl": "Ano ang pinaka-kusang bagay na nagawa mo?"
  },
  "id": "l75qocvnu2k4",
  "type": "TRUTH",
  "rating": "PG",
  "question": "What's the most spontaneous thing you've ever done?",
  "pack": null
}

Fabienne: Da das Spiel auf einem Block zu sehen ist, hatten wir bei der Mobile-Ansicht das Problem, dass nicht alle Fragen/Aufgaben platz hatten. Wir haben uns in Folge dessen dazu entschieden, dort nur zwei Sprechblasen ersichtlich zu machen. 

benutzte Ressourcen und Prompts:
-> ChatGPT & Copilot
-Kannst du uns den Code säubern
-Wir möchten xy, wie würdest du dies umsetzen? 
-Wir haben xy Problem, wie beheben wir das?
