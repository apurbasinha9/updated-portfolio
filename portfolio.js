let navList = document.getElementById("nav-list");
let menu = document.getElementById("menu");
let links = document.querySelectorAll(".nav-links a");
let github = document.getElementById("github");
let resume = document.getElementById("resume");
let cards = document.querySelectorAll(".card");
let investopedia = document.getElementById("investopedia");
let fpf = document.getElementById("fpf");
let retrevium = document.getElementById("retrevium");

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
    navList.classList.remove("active");
  });
});

github.addEventListener("click", () => {
  window.open("http://github.com/apurbasinha9", "_blank");
});

resume.addEventListener("click", () => {
  window.open("asset/Apurba-Sinha.pdf");
});

function changeCardWidthForMobile() {
  cards.forEach((card) => {
    if (window.innerWidth <= 768) {
      card.style.width = "100%";
    }
  });
}

// Run on page load
window.addEventListener("load", changeCardWidthForMobile);

// Run on window resize
window.addEventListener("resize", changeCardWidthForMobile);

investopedia.addEventListener("click", () => {
  window.open("https://www.investopedia.com/", "_blank");
});

fpf.addEventListener("click", () => {
  window.open("https://foodproducersforum.com/", "_blank");
});

retrevium.addEventListener("click", () => {
  alert(
    "Unfortunately, I do not have the access to the site because this is a protected website which is not public. Would be happy to give you details on what was is about."
  );
});
