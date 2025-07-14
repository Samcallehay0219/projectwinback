function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function generateQuote() {
  const quotes = [
    "You are my today and all of my tomorrows.",
    "Every love story is beautiful, but ours is my favorite.",
    "You make my heart smile.",
    "I still fall for you every day."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-output').textContent = quote;
}

function download() {
  alert("Download feature will be added soon. 😊");
}
