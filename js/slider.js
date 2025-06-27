let i = 1;
setInterval(() => {
  i = (i % 5) + 1;
  document.getElementById("slider").src = `https://picsum.photos/800/400?random=${i}`;
}, 3000);
