function toggleSandwich() {
  const sandwichEl = document.getElementById("sandwich");
  const menuEl = document.getElementById("menu");

  let menuDisplay = menuEl.style.display;

  console.log(menuEl.style.display);
  if (menuEl.style.display === "none" || menuEl.style.display == null) {
    menuEl.style.display = "block";
  } else {
    menuEl.style.display = "none";
  }

  console.log(menuEl.style.display);
}

function main() {
  const sandwichEl = document.getElementById("sandwich");
  sandwichEl.addEventListener("click", toggleSandwich);
}

main();
