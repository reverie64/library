const container = document.getElementById('container');
const shelf = document.getElementById('bookshelf');

const title1 = document.querySelector('#title');
const author = document.querySelector('#author');
const title = document.querySelector('#pages');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const toggle = document.querySelector('.switch');

const newBut = document.querySelector('#new');
const removeBut = document.querySelector('#remove');
const formDiv = document.querySelector('#formDiv');

const read = document.getElementsByClassName('switch');

let myLibrary = ['harry potter', 'noragami', 'fruits basket'];

/*
function Book(title, author, pages, complete, numOfBook){ git commit -m "
    this.title = title // display each book
    this.author = author
    this.pages = pages
    this.complete = complete
    this.info = function() {
       return title, author, pages, complete
    }
};
//Object.create
console.log(Book.info());
*/

// display each book   // or use for each
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.textContent = myLibrary[i];
        shelf.appendChild(bookCard);
    };
};

showBooks();



// button allows user to input a new book through a popup form 
function addBook() {
    // click button, show form 
    // if (first click)
    formDiv.style.display = 'block';
    // else ---- next click
    // formDiv.style.display = 'none';
};

newBut.addEventListener('click', addBook)



// button to remove book from library
function removeBook() {
    console.log('remove')
};

removeBut.addEventListener('click', removeBook)



// toggles book to read or unread based on book prototype
function readBook() {
    // if (first click)
    console.log('read book')
    // else 
    //console.log('havent read')
}

toggle.addEventListener('click', readBook)