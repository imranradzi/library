let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

const book1 = new Book('author1', 'title1', 'pages1', true);
const book2 = new Book('author2', 'title2', 'pages2', false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

gridContainer = document.querySelector('.grid-container');

function displayBook() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  let index = 0;
  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.setAttribute('id', index);
    card.classList.add('card');

    // setting up div to contain delete button for card
    const deleteDiv = document.createElement('div');
    const svgDelete = document.createElement('img');
    svgDelete.setAttribute('src', 'svg/bin.svg');
    deleteDiv.appendChild(svgDelete);
    card.appendChild(deleteDiv);

    // delete functionality
    const deleteButton = card.querySelector('div:nth-child(1)');
    deleteButton.addEventListener('click', () => {
      myLibrary.splice(parseInt(card.getAttribute('id')), 1);
      displayBook();
    });

    // setting up div to contain info for card
    for (let prop in book) {
      const info = document.createElement('div');
      info.textContent = `${prop}: ${book[prop]}`;
      card.appendChild(info);
    }
    gridContainer.appendChild(card);
    index++;
  }
}

addBookToLibrary(book1);
addBookToLibrary(book2);
displayBook();