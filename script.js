const header = document.querySelector('header');
const mainContainer = document.querySelector('.main-container');
const footer = document.querySelector('footer');

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
    const deleteButton = card.querySelector('img');
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

// for opening and closing form

const formContainer = document.querySelector('.form-container');

const newBookButton = document.querySelector('.new-book > button');
newBookButton.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

function formSubmit() {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  document.querySelector('form').reset();
}

const formSubmitButton = document.querySelector('form > button');
formSubmitButton.addEventListener('click', () => {
    formSubmit();
    displayBook();
    formContainer.style.display = 'none';
})

displayBook();