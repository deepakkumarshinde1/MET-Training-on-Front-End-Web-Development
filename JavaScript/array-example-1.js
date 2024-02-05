let inputNumber = document.querySelector("#inputNumber");
let save = document.querySelector("#save");
let list = document.querySelector("#list");
let inputName = document.querySelector("#inputName");

let listArray = [];

save.addEventListener("click", () => {
  let newNumber = Number(inputNumber.value);
  let newName = inputName.value;
  console.log(newName);
  listArray.push({
    rollNo: newNumber,
    name: newName,
  });

  console.log(listArray);
  let liList = listArray.map((value, index) => {
    return `<li>Candidate name ${value.name} has roll no as ${value.rollNo}</li>`;
  });

  let lis = liList.join("");

  list.innerHTML = lis;
});
