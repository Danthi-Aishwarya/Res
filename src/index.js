import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const contentDiv = document.getElementById("content");
const textContainer = document.createElement("div");
textContainer.classList.add("text-container");
contentDiv.appendChild(textContainer);

function clearContent() {
  textContainer.innerHTML = "";
}
function navigateTo(section) {
  clearContent();
  switch (section) {
    case "home":
      textContainer.appendChild(loadHome());
      break;
    case "menu":
      textContainer.appendChild(loadMenu());
      break;
    case "contact":
      textContainer.appendChild(loadContact());
      break;
    default:
      textContainer.appendChild(loadHome());
  }
}

navigateTo("home");

document
  .getElementById("home-btn")
  .addEventListener("click", () => navigateTo("home"));
document
  .getElementById("menu-btn")
  .addEventListener("click", () => navigateTo("menu"));
document
  .getElementById("contact-btn")
  .addEventListener("click", () => navigateTo("contact"));
