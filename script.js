const planetIcon = document.querySelector("#planetIcon");
console.log(planetIcon);

planetIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("bgImg");
  body.classList.add("dark");
});

hamburgerIcon.addEventListener("click", function () {
    // Hente elementet som skal bli synlig
    const navList = document.querySelector("#navList");
    console.log(navList);
  
    navList.classList.remove("hidden");
    navList.classList.add("navList");
  });