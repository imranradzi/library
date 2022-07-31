let myLibrary = [];

function Book(author, title, pages) {
  this.author = author
  this.title = title
  this.pages = pages
}

const book1 = new Book('author1', 'title1', 'pages1');
const book2 = new Book('author2', 'title2', 'pages2');

function addBookToLibrary(book) {
  myLibrary.push(book);
}

gridContainer = document.querySelector('.grid-container');

function displayBook() {
  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('card');
    for (let prop in book) {
      const info = document.createElement('div');
      info.textContent = `${prop}: ${book[prop]}`;
      card.appendChild(info);
    }
    gridContainer.appendChild(card);
  }
}

addBookToLibrary(book1);
addBookToLibrary(book2);
displayBook();