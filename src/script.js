function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: "🍲 Here's your recipe:" + response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "fobd5f34d0a71b340a77389t18db1bc0";
  let context =
    "You are a world class chef that creates delicious healthy recipes with any ingredients. Create it in a step by step format in basic HTML. Don't say it's in HTML in the text. Sign it at the bottom `Your SheCodes AI` in a <strong> format";
  let prompt = `Create a recipe with the following ingredients ${instructionsInput.value}`;
  let instructions = instructionsInput.value; // Store the value before clearing
  instructionsInput.value = ""; // Clear the input field

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">👩‍🍳 Cooking your recipe with ${instructions}</div>`;

  axios.get(apiURL).then(showRecipe);
}

let recipeFormElement = document.getElementById("recipe-form");
recipeFormElement.addEventListener("submit", getRecipe);
