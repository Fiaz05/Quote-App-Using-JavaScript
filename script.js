//Api Url
const apiUrl = 'https://api.quotable.io/random';

//get elements
const quoteButton = document.getElementById("new-quote");
const quoteDisplay = document.getElementById("quote-display");

//Fetch and display quote
async function fetchQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quote = data.content;
    const auhtor = data.auhtor;
    quoteDisplay.innerHTML = `"${quote}" <br> ${auhtor}`;
  } catch (error) {
    console.log("Error Fetching Data:", error);
  }
}
quoteButton.addEventListener("click", fetchQuote);
fetchQuote();