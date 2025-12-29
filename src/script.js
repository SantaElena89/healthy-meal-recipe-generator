function getRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-result", {
    strings: "Here's your recipe!🍲",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.getElementById("recipe-form");
recipeFormElement.addEventListener("submit", getRecipe);
