function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dc13349b33f710cte63cf40fe59aa2o5";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value} `;
  let context =
    "You are a Poem generator expert and you love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Do not include a heading. Sign after the poem with 'SheCodes AI' inside a <strong></strong> element at the end of the poem. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
