const productsContainer = document.getElementById("products-container");

async function fetchProductsList() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error("Error receiving the list of products");
    }

    const products = await response.json();

    products.forEach((product) => {
      const { title, price, description, images } = product;

      const productCardElement = document.createElement("div");
      const titleElement = document.createElement("h2");
      const priceElement = document.createElement("p");
      const descriptionElement = document.createElement("p");
      const imageElement = document.createElement("img");

      titleElement.innerText = title;
      priceElement.innerText = `Price: ${price} €`;
      descriptionElement.innerText = description;
      imageElement.src = images[0];

      productCardElement.append(
        titleElement,
        imageElement,
        priceElement,
        descriptionElement
      );
      productsContainer.appendChild(productCardElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

fetchProductsList();
