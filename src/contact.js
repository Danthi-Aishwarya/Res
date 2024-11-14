export function loadContact() {
  const content = document.createElement("div");
  content.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: DNR@restaurant.com</p>
        <p>Phone: 91+ 1245678967</p>
    `;
  return content;
}
