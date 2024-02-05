let numberList = [10, 20, 30, 40];

console.log(numberList[0]);

// function(){}
// () => {}

// read
numberList.forEach((value, index) => {
  //   console.log(value, index);
});
// add data ==> push , unshift
numberList.unshift(400, 300, 10, 30, 10);
console.log(numberList);

// delete data

// numberList.splice(3, 1);
// console.log(numberList);

// search data
let searchResult = numberList.filter((value, index) => {
  return value === 10;
});
console.log(searchResult);
// re-create array

let newList = numberList.map((value, index) => {
  return `<li>${value * value}</li>`;
});
// array ==> string
let liList = newList.join("");
console.log(liList);

// sort array
