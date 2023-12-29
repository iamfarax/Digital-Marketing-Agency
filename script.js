burger = document.querySelector(".burger");
Navlist = document.querySelector(".navlist");
burger.addEventListener("click", () => {
  Navlist.classList.toggle("v-nav-resp");
  // Navlist.classList.toggle("h-nav-resp");
});
