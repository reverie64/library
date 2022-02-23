const container = document.getElementById('container');
const shelf = document.getElementById('bookshelf');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const start = document.getElementById('start');
const current = document.getElementById('current');
const complete = document.getElementById('complete');
const end = document.getElementById('end');
const rating = document.getElementById('rating');

const newBut = document.querySelector('#new');
const removeBut = document.querySelector('#remove');
const submitBut = document.querySelector('#submit');
const formDiv = document.querySelector('#formDiv');

const read = document.getElementsByClassName('switch');

let myLibrary = [];

function Book(title, author, pages, start, current, complete, end, rating) {
    this.title = title
    this.author = author
    this.pages = pages
    this.start = start
    this.current = current
    this.complete = complete
    this.end = end
    this.rating = rating
    this.info = function () {
        console.log(title, author, pages, complete, start, current, complete, end, rating)
        return title, author, pages, complete, start, current, complete, end, rating
    };
};

// display each book       
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.textContent = myLibrary[i].title;
        shelf.appendChild(bookCard);
    };
};


// click button to show div with form for new book / click again to hide
// change button text new / hide
function showForm() {
    display = window.getComputedStyle(formDiv, null).getPropertyValue('display');
    if (display === 'none') {
        formDiv.style.display = 'block';
        newBut.textContent = 'hide'
    } else {
        formDiv.style.display = 'none';
        newBut.textContent = 'new'
    };
};

newBut.addEventListener('click', showForm)


// takes user input from form when submit button is pushed
function addBook(title, author, pages, start, current, complete, end, rating) {
    title = title.value
    author = author.value
    pages = pages.value
    start = start.value
    current = current.checked
    complete = complete.checked
    end = end.value
    rating = rating.value

    let newBook = new Book(title, author, pages, start, current, complete, end, rating);

    myLibrary.push(newBook);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.textContent = newBook.title;
    shelf.appendChild(bookCard);
    console.log(newBook);
    readToggle(bookCard);
    trashCan(bookCard);
};

submitBut.addEventListener('click', () => addBook(title, author, pages, start, current, complete, end, rating));


const selectBook = document.querySelector('.book')

// update books after added to library


// create trash button in DOM and give it click functionality
function trashCan(bookCard) {
    const trash = document.createElement('button');
    trash.classList.add('can');
    trash.textContent = 'remove';
    bookCard.appendChild(trash);
    trash.addEventListener('click', removeBook)
};

/* 
 myLibrary arr , find book index which will be user selection
remove from array, return new arr
*/

// button to remove book from library - targeting array and DOM
function removeBook(bookCard) {
    //  myLibrary.splice(myLibrary.indexOf(bookCard),1)
    //bookCard.shelf.removeChild(bookCard)
    console.log('remove')
};


// create read toggle in DOM 
//TODO js working but css isn't 

function readToggle(bookCard) {
    const toggle = document.createElement('checkbox');
    toggle.classList.add('complete');
    bookCard.appendChild(toggle);
    toggle.addEventListener('click', () => {
        readBook();
    });
};

//change to another check box/ toggle that will be on each book
// toggles to update book to read or unread 
function readBook() {
    if (complete.checked == true) {
        complete.checked = true
        console.log('finished book')
    } else {
        complete.value = false
        console.log('havent read book')
    };
};

complete.addEventListener('click', readBook)

showBooks();


/* 
Quality of life:
click on book card for it to flip and displays info
if start date = today, automatically check box for currently reading
add today button or give placeholder of today 
dont make two that are identical/ warn that this already exisits, do you want to cont?
aloow name and have multply bookshelves
sort bookshelves
clear form on submit
*/

/* later updates for better code:
showBooks() - use for each instead of for loop
REMOVE button - change to just one button? 
    update to filter

*/