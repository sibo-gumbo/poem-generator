function displayPoem(response) {
  console.log("poem generated");
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
    "You are a Poem generator expert and you love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Do not include a heading. Sign the poem with 'Sibo Gumbo' inside a <strong></strong> element at the end of the poem. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let generateFormElement = document.querySelector("#poem-generator-form");
generateFormElement.addEventListener("submit", generatePoem);
