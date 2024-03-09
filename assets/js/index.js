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
const borderCard =
  document.querySelectorAll(".card");

let isDarkMode = false;

darkMode.addEventListener("click", () => {
  nav.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    darkMode.src = "./assets/images/icon_sun.svg";
    borderCard.forEach((card) => {
      card.classList.add("border-white");
    });
  } else {
    darkMode.src =
      "./assets/images/icon_moon.svg";
    borderCard.forEach((card) => {
      card.classList.remove("border-white");
    });
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

var btnDarkMobile = document.getElementById(
  "dark-mobile"
);

let isDarkModeMobile = false;

btnDarkMobile.addEventListener("click", () => {
  isDarkModeMobile = !isDarkModeMobile;

  if (isDarkModeMobile) {
    btnDarkMobile.innerHTML = "Light Mode";
    btnDarkMobile.classList.remove("btn-dark");
    btnDarkMobile.classList.add("btn-yellow");
    borderCard.forEach((card) => {
      card.classList.add("border-white");
    });
  } else {
    btnDarkMobile.innerHTML = "Dark Mode";
    btnDarkMobile.classList.remove("btn-yellow");
    btnDarkMobile.classList.add("btn-dark");
    borderCard.forEach((card) => {
      card.classList.remove("border-white");
    });
  }
});
