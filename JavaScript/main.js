let student = ["Deepak", 25, 30, 32];

// js object ==> collection os properties and values
let stud = {
  name: "Deepak",
  rollNo: 25,
  marks: 30,
  age: 32,
  name: "Suraj",
};

stud.location = "Nashik";

// console.log(stud);

// JSON Array
let studentList = [
  {
    name: "Deepak",
    rollNo: 25,
    marks: 30,
    age: 32,
    name: "Suraj",
  },
  {
    name: "Deepak",
    rollNo: 25,
    marks: 30,
    age: 32,
    name: "Suraj",
  },
  {
    name: "Deepak",
    rollNo: 25,
    marks: 30,
    age: 32,
    name: "Suraj",
  },
];

// functions
let text = "Hello";
function fun() {
  //   console.log(text);
  let text = "Welcome";
  console.log(text);
  //   if (true === true) {
  //     let text = "MET";
  //     console.log(text);
  //   }
} // function  definition

// fun(); // function call
// console.log(text);

// console.log(a);
// var a = 10;

// Event Loop
// Web API  => DOM ,setTimeout , setInterval , Promises , Async Await , XHR ,fetch

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

let heading = document.querySelector("h1");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", function () {
  heading.innerHTML = input.value;
  heading.style.backgroundColor = "red";
  heading.style.fontSize = "4rem";

  // set input
  input.value = "";
});

// setTimeout(function () {

// }, 5000);
