export function loadHome() {
  const content = document.createElement("div");
  content.innerHTML = `
        <h2>Welcome to Our DNR Restaurant!</h2>
        <p>Enjoy a fantastic dining experience with us.</p>
    `;
  return content;
}
