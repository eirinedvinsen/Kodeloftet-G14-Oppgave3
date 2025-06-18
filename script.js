const planetIcon = document.querySelector("#planetIcon");
console.log(planetIcon);

sunIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("light");
  body.classList.add("dark");
});