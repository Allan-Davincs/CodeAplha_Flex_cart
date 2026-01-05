// products.js

const productList = document.getElementById("product-list");

// Sample products (replace with API later)
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25,
    image: "assets/images/mouse.png"
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 80,
    image: "assets/images/keyboard.png"
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    price: 60,
    image: "assets/images/headphones.png"
  }
];

function renderProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <a href="product.html?id=${product.id}">
        <button>View Details</button>
      </a>
    `;

    productList.appendChild(card);
  });
}

renderProducts();
