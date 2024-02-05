let createAccountBtn = document.querySelector(".create-account");
let popRegistration = document.querySelector(".pop-registration");
let cancelBtn = document.querySelector(".cancel");
let saveBtn = document.querySelector("#save");

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");

let lUserName = document.querySelector("#lUserName");
let lPassword = document.querySelector("#lPassword");
let signIn = document.querySelector("#signIn");

// is userLogin

let login = localStorage.getItem("login");
if (login !== null) {
  window.location.replace("/write-blog.html");
}

createAccountBtn.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});

cancelBtn.addEventListener("click", () => {
  popRegistration.classList.add("d-none");
});

saveBtn.addEventListener("click", () => {
  let newUser = {
    fullName: fullName.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
  };

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

  if (isUserExist === undefined) {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    alert("Registration successful, you can login now");
    popRegistration.classList.add("d-none");
  } else {
    alert("Given email already registered, try different");
  }
});

signIn.addEventListener("click", () => {
  let username = lUserName.value;
  let password = lPassword.value;

  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.findIndex((value) => {
    return value.email === username && value.password === password;
  });

  if (isUserExist === -1) {
    alert("User not found, please try again");
  } else {
    alert("Login successfully");
    localStorage.setItem("login", isUserExist);
    window.location.replace("/write-blog.html");
  }
});
