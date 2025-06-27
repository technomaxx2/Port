async function getQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();
  document.getElementById("quote").textContent = `\"${data.quote}\"`;
  document.getElementById("author").textContent = `- ${data.author}`;
}
document.getElementById("new-quote").onclick = getQuote;
getQuote();
