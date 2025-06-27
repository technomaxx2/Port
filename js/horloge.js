setInterval(() => {
  const now = new Date();
  document.getElementById("horloge").textContent = now.toLocaleTimeString();
}, 1000);
