function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["As the dear pantenth for the water"],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let generateFormElement = document.querySelector("#poem-generator-form");
generateFormElement.addEventListener("submit", generatePoem);
