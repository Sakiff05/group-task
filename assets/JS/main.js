let signInBtn = document.querySelector(".sign-in-btn");
let overlay = document.querySelector(".sign-in");
let closeOverlay = document.querySelector(".close-overlay");

signInBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
  document.body.style.overflow = "scroll";
});
