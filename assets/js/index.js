const darkMode =
  document.getElementById("icon-moon");
const body = document.body;
const footer = document.querySelector("footer");
const nav = document.querySelector(
  ".navbar-dekstop"
);

const toogle = document.querySelector(
  ".menu-toggle"
);
const navMobile = document.querySelector(
  ".navbar-mobile"
);
const overlay =
  document.querySelector(".overlay");
const listMobile = document.querySelectorAll(
  ".list-mobile a"
);
const darkMobile = document.getElementById(
  "dark-mobile"
);

let isDarkMode = false;

darkMode.addEventListener("click", () => {
  nav.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    darkMode.src = "./assets/images/icon_sun.svg";
  } else {
    darkMode.src =
      "./assets/images/icon_moon.svg";
  }
});

document
  .querySelectorAll("#navlinks a")
  .forEach((anchor) => {
    anchor.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        document
          .querySelector(
            this.getAttribute("href")
          )
          .scrollIntoView({
            behavior: "smooth",
          });

        document
          .querySelectorAll("#navlinks a")
          .forEach((a) =>
            a.classList.remove("active-nav")
          );
        this.classList.add("active-nav");
      }
    );
  });

document
  .querySelectorAll("#navlinks-mobile a")
  .forEach((anchor) => {
    anchor.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        document
          .querySelector(
            this.getAttribute("href")
          )
          .scrollIntoView({
            behavior: "smooth",
          });

        document
          .querySelectorAll("#navlinks-mobile a")
          .forEach((a) =>
            a.classList.remove("active-nav")
          );
        this.classList.add("active-nav");
        body.classList.remove("overflow");
        navMobile.classList.remove("show-nav");
        overlay.classList.remove("show-nav");
      }
    );
  });

toogle.addEventListener("click", () => {
  body.classList.toggle("overflow");
  navMobile.classList.toggle("show-nav");
  overlay.classList.toggle("show-nav");
  if (listMobile) {
    listMobile.forEach((list) => {
      list.addEventListener("click", () => {
        body.classList.remove("overflow");
        navMobile.classList.remove("show-nav");
        overlay.classList.remove("show-nav");
      });
    });
  }
});

darkMobile.addEventListener("click", () => {
  nav.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  if (darkMobile) {
    body.classList.remove("overflow");
    navMobile.classList.remove("show-nav");
    overlay.classList.remove("show-nav");
  }
});
