const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const logo = document.querySelector(".logo");

let showMenu = false;

let hideMenuOnTap = () => {
  hamburger.classList.remove("open");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  logo.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));

  showMenu = false;
};

let toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    logo.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hideMenuOnTap();
  }
};

menuBtn.addEventListener("click", toggleMenu);

for (const item of navItems) {
  item.addEventListener("click", hideMenuOnTap);
}
