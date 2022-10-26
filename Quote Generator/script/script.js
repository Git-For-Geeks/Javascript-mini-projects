let quoteText = document.getElementById("quoteText");
let button = document.getElementById("btn");

function quoteGenerator() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
    });
}
window.onload = quoteGenerator;
