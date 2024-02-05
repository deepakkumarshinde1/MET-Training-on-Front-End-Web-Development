let inputOne = document.querySelector("#fName");
let inputTwo = document.querySelector("#lName");
let saveButton = document.querySelector("#save");
let finalText = document.querySelector("#finalText");

saveButton.addEventListener("click", function () {
  let fName = inputOne.value;
  let lName = inputTwo.value;
  console.log(fName, lName);
  finalText.innerHTML = `Full Name is : ${fName} ${lName}`;
});
