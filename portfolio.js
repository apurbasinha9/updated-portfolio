let navList = document.getElementById("nav-list");
let menu = document.getElementById("menu");
let links = document.querySelectorAll(".nav-links a");

function showMenu() {
  navList.classList.toggle("active");
}

if (window.innerWidth <= 768) {
  document.getElementById("resume").innerText = "Resume";
  document.getElementById("github").innerText = "Github";
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
