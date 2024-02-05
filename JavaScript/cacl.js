let varOne = document.querySelector("#inputOne");
let varTwo = document.querySelector("#inputTwo");
let button = document.querySelector("#resultCheck");
let resultElement = document.querySelector("#result");
let option = document.querySelector("#opt");

button.addEventListener("click", function () {
  let choice = option.value;
  let result = null;
  console.log(choice);
  switch (choice) {
    case "add":
      result = Number(varOne.value) + Number(varTwo.value);
      break;

    case "multi":
      result = Number(varOne.value) * Number(varTwo.value);
      break;

    case "div":
      result = Number(varOne.value) / Number(varTwo.value);
      break;

    case "sub":
      result = Number(varOne.value) - Number(varTwo.value);
      break;
  }

  resultElement.innerHTML = result;
  varOne.value = "";
  varTwo.value = "";
});
