let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

gridContainer = document.querySelector('.grid-container');

// function that (should) take book, book property and div as
// input, then adds the property attribute to div
function propInfo(book, prop, div) {
  if (prop === 'read') {
    const hasRead = document.createElement('img');
    const hasNotRead = document.createElement('img');
    hasRead.setAttribute('src', 'svg/check.svg');
    hasNotRead.setAttribute('src', 'svg/x.svg');
    div.textContent = 'Read Status';
    if (book[prop] === true) {
      div.appendChild(hasRead);
    } else {
      div.appendChild(hasNotRead);
    }
    // user can click on the tick/cross icon to set read status
    const readButton = div.querySelector('img');
    readButton.addEventListener('click', () => {
      if (readButton.getAttribute('src') === 'svg/check.svg') {
        readButton.setAttribute('src', 'svg/x.svg');
        book[prop] = false;
      } else {
        readButton.setAttribute('src', 'svg/check.svg');
        book[prop] = false;
      }
    })
  // default info for other properties
  } else {
    div.textContent = `${prop.toUpperCase()} | ${book[prop]}`;
  }
}

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
      // custom info for read property
      propInfo(book, prop, info);
      card.appendChild(info);
    }
    gridContainer.appendChild(card);
    index++;
  }
}

// for opening form
const formContainer = document.querySelector('.form-container');

const newBookButton = document.querySelector('.new-book > button');
newBookButton.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

// book submission, also resets form
function formSubmit() {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  document.querySelector('form').reset();
}

// for closing form, and submitting a book to the page
const formSubmitButton = document.querySelector('form > button');
formSubmitButton.addEventListener('click', () => {
    formSubmit();
    displayBook();
    formContainer.style.display = 'none';
})

// button for closing form if user wants to cancel
const formCancelButton = document.querySelector('.cancel');
formCancelButton.addEventListener('click', () => {
  formContainer.style.display = 'none';
})


const book1 = new Book('Gary Sue', 'Deus Ex Machina', '1000', true);
addBookToLibrary(book1);
displayBook();