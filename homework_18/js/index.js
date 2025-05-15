const authorContainer = document.getElementById("author-container");
const booksContainer = document.getElementById("books-container");

fetch("https://viktoriia-tereshchenko.github.io/my-favorite-books/books.json")
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error("Something is wrong");
    }
  })
  .then((data) => {
    const { author, books } = data;
    const authorElement = authorContainer.querySelector("h2");
    authorElement.innerText = author;

    showBooks(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

const showBooks = (books) => {
  books.forEach(({ title, year, img }) => {
    const bookElement = document.createElement("div");
    const titleElement = document.createElement("p");
    const yearElement = document.createElement("p");
    const imgElement = document.createElement("img");

    titleElement.innerText = `Title: ${title}`;
    yearElement.innerText = `Year ${year}`;
    imgElement.src = img;
    imgElement.arc = title;

    bookElement.append(titleElement, imgElement, yearElement);
    booksContainer.appendChild(bookElement);
  });
};
