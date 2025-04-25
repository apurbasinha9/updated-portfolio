let navList = document.getElementById("nav-list");
let menu = document.getElementById("menu");

function showMenu() {
  navList.classList.toggle("active");
}

if (window.innerWidth <= 768) {
  document.getElementById("resume").innerText = "Resume";
  document.getElementById("github").innerText = "Github";
}
