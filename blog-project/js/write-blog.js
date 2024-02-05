let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("/login.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector("#welcome-text").innerHTML = `Welcome, <b>${
    userDetails.fullName.split(" ")[0]
  }</b>`;
}

console.log(userDetails);
let logoutBtn = document.querySelector("#logout");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let url = document.querySelector("#url");
let saveBlogBtn = document.querySelector("#save-blog");

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    title: title.value,
    description: description.value,
    url: url.value,
    id: login,
    author: userDetails.fullName,
  };
  let blogs = localStorage.getItem("blogs"); // null;
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  alert("Blog Saved Successfully");
});

logoutBtn.addEventListener("click", () => {
  let isLogout = confirm("Are you sure to logout?");
  if (isLogout === true) {
    localStorage.removeItem("login");
    window.location.replace("/login.html");
  }
});
