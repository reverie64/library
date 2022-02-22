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
const submitBut = document.querySelector('#submit');
const formDiv = document.querySelector('#formDiv');

const read = document.getElementsByClassName('switch');

let myLibrary = [];

// for numOfBook : find the book.title's index of array and return in 
// myLibrary

function Book(title, author, pages, complete, numOfBook) {
    this.title = title // display each book
    this.author = author
    this.pages = pages
    this.complete = complete
    this.numOfBook = numOfBook
  /*  this.info = function() {
        console.log(title, author, pages, complete, numOfBook)
       return title, author, pages, complete, numOfBook
    }*/
};
//console.log(got.info());


// display each book       
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.textContent = myLibrary[i].title;
        shelf.appendChild(bookCard);
    };
};


// show hidden div with form for new book
function showForm() {
    // click button, show form 
    // if (first click)
    formDiv.style.display = 'block';
    // else ---- next click
    // formDiv.style.display = 'none';
};

newBut.addEventListener('click', showForm)


// button allows user to input a new book through a popup form 
function addBook(title, author, pages, complete, numOfBook) {
  let newBook = new Book(title, author, pages, complete, numOfBook);
  myLibrary.push(newBook);
};

submitBut.addEventListener('click', addBook)

addBook('game of thrones', 'george rr martin', '1000', 'yes', '0');
addBook('harry potter', 'none :)', '500', 'yes', '1');
addBook('noragami-1', 'adachitoka', '200', 'yes', '2');


// button to remove book from library
function removeBook() {
myLibrary.splice()
    console.log('remove')
};

removeBut.addEventListener('click', removeBook)

/* 
 myLibrary arr
find book index
remove from array -- slipce
return new arr
*/

// toggles book to read or unread based on book prototype
function readBook() {
    // if (first click)
    console.log('read book')
    // else 
    //console.log('havent read')
}

toggle.addEventListener('click', readBook)

showBooks();


/* 
QoL
if start date = today, automatically check box for currently reading
name and have multply bookshelves
sort bookshelves
*/


/* later updates for better code:
showBooks() - use for each instead of for loop
REMOVE button - change to just one button? 
    update to filter

*/

