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

const toggle = document.querySelector('.complete');

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


// show hidden div with form for new book
function showForm() {
    // click button, show form 
    // if (first click)
    formDiv.style.display = 'block';
    // else ---- next click
    // formDiv.style.display = 'none';
};

newBut.addEventListener('click', showForm)


// takes user input from form when submit button is pushed
function addBook(title, author, pages, start, current, complete, end, rating) {
    title = title.value
    author = author.value
    pages = pages.value
    start = start.value
    current = current.value
    complete = complete.value
    end = end.value
    rating = rating.value

    let newBook = new Book(title, author, pages, start, current, complete, end, rating);

    myLibrary.push(newBook);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.textContent = newBook.title;
    shelf.appendChild(bookCard);
    console.log(newBook);
};

submitBut.addEventListener('click', () => addBook(title, author, pages, start, current, complete, end, rating)

)
/*
addBook('game of thrones', 'george rr martin', '1000');
addBook('harry potter', 'none :)', '500', 'yes');
addBook('noragami-1', 'adachitoka', '200', 'yes');
*/



// button to remove book from library
function removeBook() {
    //  myLibrary.findIndex(book => )

    //myLibrary.filter(book => )


    console.log('remove')
};

removeBut.addEventListener('click', removeBook)

/* 
 myLibrary arr
find book index which will be user selection
remove from array -- slipce/ filter
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
Quality of life:
click on book card for it to flip and displays info
if start date = today, automatically check box for currently reading
add today button or give placeholder of today 
dont make two that are identical/ warn that this already exisits, do you want to cont?
aloow name and have multply bookshelves
sort bookshelves
*/

/* later updates for better code:
showBooks() - use for each instead of for loop
REMOVE button - change to just one button? 
    update to filter

*/