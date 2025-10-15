const activities = [
  "Go touch some grass 🌿",
  "Drink some water 💧",
  "Build a new website 💻",
  "Take a nap 😴",
  "Do 10 pushups 💪",
  "Watch a random YouTube video 🎥",
  "Listen to your favorite song 🎧",
  "Clean your desk 🧹",
  "Draw something random ✏️",
  "Text your friend 👋",
  "Try learning a new JS trick ⚙️",
  "Go outside and look at the sky ☁️",
  "Eat something healthy 🍎",
  "Write a weird poem ✍️",
  "Invent a fake word 🤓",
  "Make a meme 😆"
];

const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

const popSound = new Audio("pop.mp3");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  result.textContent = activities[randomIndex];
  
  popSound.currentTime = 0;
  popSound.play();
});
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  result.textContent = activities[randomIndex];

  popSound.currentTime = 0;
  popSound.play();

  // add visual pop
  result.classList.add("pop");
  setTimeout(() => result.classList.remove("pop"), 100);
});

