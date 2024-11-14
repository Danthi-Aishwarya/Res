export function loadMenu() {
  const content = document.createElement("div");
  content.innerHTML = `
    <h2>Our Menu</h2>
    <ul>
        <li>Pizza - $10</li>
        <li>Burger - $8</li>
        <li>Pasta - $12</li>
        <li>Tacos - $5</li>
        <li>Fried Chicken - $11</li>
        <li>Soup - $6</li>
        <li>Sushi - $15</li>
    </ul>
`;

  return content;
}
