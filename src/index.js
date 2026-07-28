function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a2c66d6a4t483531e093eb3de3fbao9b";
  let prompt = `user instructions: generate a quote about ${instructionsInput.value}`;
  let context =
    "you are a quote expert, you love to quote famous people and sayings. your mission is to generate a 4 lines quote in basic HTML and separate each line with a <br/>, make sure to follow the user instructions. do not wrap your response in markdown or code blocks, do not use triple backticks, only return the raw HTML with no extra formatting or labels. sign the with SheCodes AI after the quote inside the <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
