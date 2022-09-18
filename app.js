// elements
const inputField = document.querySelector("#text-field");
const wordsCounter = document.querySelector("#words-counter");
const spaceCounter = document.querySelector("#space-counter");
const charsCounter = document.querySelector("#chars-counter");
// functions
inputField.addEventListener("input", function (e) {
  const value = e.target.value;
  //   words
  const words = value.split(/\s+/).filter((item) => item.length);
  wordsCounter.textContent = words.length;
  //   chars
  charsCounter.textContent = value.length;
  //   space
  const whiteSpaces = value.split("").filter((item) => item == " ").length;
  spaceCounter.textContent = whiteSpaces;
});