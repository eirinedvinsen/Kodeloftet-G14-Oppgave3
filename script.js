const planetIcon = document.querySelector("#planetIcon");
console.log(planetIcon);

planetIcon.addEventListener("click", function () {
  const body = document.querySelector("body");
  const webb = document.querySelector("#webb");
  const hubbel = document.querySelector("#hubbel");
  const orange = document.createElement("section");
  const orangeText = document.createElement("h1");
  const main = document.querySelector ("main");

  //Orange
  webb.style.display = "none"; 
  hubbel.style.display = "none";
  orangeText.textContent = "ORANGE!";
  orangeText.style.color = "purple";
  orangeText.style.backgroundColor = "orange";
  orange.style.height = "100vh";
  orangeText.style.fontSize = "350px";

  body.classList.remove("purple");
  body.classList.add("orange");
  orange.appendChild(orangeText); 
  main.appendChild(orange); 
});