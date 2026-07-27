function generateQuote(event) {
  event.preventDefault();
  alert("Generating quote");

  new Typewriter("#quote", {
    strings: [
      "Life is really simple, but we insist on making it complicated. Confucius",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
