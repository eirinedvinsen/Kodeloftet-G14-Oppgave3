const planetIcon = document.querySelector("#planetIcon");
console.log(planetIcon);

planetIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("purple");
  body.classList.add("orange");
});