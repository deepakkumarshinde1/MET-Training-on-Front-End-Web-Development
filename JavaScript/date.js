// let date = new Date();
// console.log(date.toLocaleDateString());
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay() + 1);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

let timer = document.querySelector("#timer");

setInterval(getTime, 1000);

function getTime() {
  let date = new Date();
  //   date.setHours(14);
  let hrs = date.getHours();
  let hr12 = hrs % 12;
  hr12 = hr12 < 10 ? `0${hr12}` : hr12;
  let m = hrs > 12 ? "PM" : "AM";
  let time = date.toLocaleTimeString();
  time = time.split(":");
  time[0] = hr12;

  time = time.join(":");
  timer.innerHTML = `${time} ${m}`;
}

let text = "Javascript is a programming language";
text = [{ name: "Deepak" }, { name: "Deepak" }, { name: "Deepak" }];
// convert a array/jsObject  to string but it will preserve its structure
text = JSON.stringify(text);
localStorage.setItem("data", text);

let data = localStorage.getItem("data");

data = JSON.parse(data);
console.log(data);
