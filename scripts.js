const container = document.getElementById("container");
const shelf = document.getElementById("bookshelf");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const start = document.getElementById("start");
const current = document.getElementById("current");
const complete = document.getElementById("complete");
const end = document.getElementById("end");
const rating = document.getElementById("rating");

const newBut = document.getElementById("new");
const removeBut = document.getElementById("remove");
const submitBut = document.getElementById("submit");
const formDiv = document.getElementById("formDiv");
const bookForm = document.getElementById("form");

const read = document.getElementsByClassName("switch");

let myLibrary = [];

function Book(title, author, pages, start, current, complete, end, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.start = start;
    this.current = current;
    this.complete = complete;
    this.end = end;
    this.rating = rating;
    this.info = function () {
        console.log(
            title,
            author,
            pages,
            complete,
            start,
            current,
            complete,
            end,
            rating
        );
        return (
            title,
            author,
            pages,
            complete,
            start,
            current,
            complete,
            end,
            rating
        );
    };
};

// display each book
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.textContent = myLibrary[i].title;
        shelf.appendChild(bookCard);
    };
};

// click button to show div with form for new book / click again to hide
// change button text new / hide
function showForm() {
    display = window
        .getComputedStyle(formDiv, null)
        .getPropertyValue("display");
    if (display === "none") {
        formDiv.style.display = "block";
        newBut.textContent = "hide";
    } else {
        formDiv.style.display = "none";
        newBut.textContent = "new";
    };
};

newBut.addEventListener("click", showForm);

// takes user input from form when submit button is pushed
// generates book in DOM, along with buttons
function addBook(title, author, pages, start, current, complete, end, rating) {
    title = title.value;
    author = author.value;
    pages = pages.value;
    start = start.value;
    current = current.checked;
    complete = complete.checked;
    end = end.value;
    rating = rating.value;

    let newBook = new Book(
        title,
        author,
        pages,
        start,
        current,
        complete,
        end,
        rating
    );

    myLibrary.push(newBook);
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.textContent = newBook.title;
    bookCard.id = newBook.title;
    shelf.appendChild(bookCard);
    readToggle(bookCard);
    trashCan(bookCard);
    console.log(bookCard.getAttribute('id'))
};

// on submit
function formFunc() {
    event.preventDefault();
    bookForm.reset();
    // hide form again
    showForm();
};

submitBut.addEventListener("click", () => {
    addBook(title, author, pages, start, current, complete, end, rating);
    formFunc();
});

//---
// utilities to update books after added to myLibrary and shelf
//---

// create trash button in DOM and give it click functionality
function trashCan(bookCard) {
    const trash = document.createElement("button");
    trash.classList.add("can");
  //  trash.textContent = "remove";
    bookCard.appendChild(trash);
}

// remove book from library - targeting array and DOM
shelf.addEventListener("click", function (e) {
    if (e.target.classList != "can") return;
    let selectBook = e.target.closest(".book");

 //let index = selectBook.textContent
 //let index = selectBook.value;
  let index = selectBook.getAttribute('id');
 console.log(index)
    myLibrary.splice(index, 1);
   selectBook.remove();

//myLibrary = myLibrary.filter(book => book !== index);
console.log(myLibrary);
});

// create read / unread toggle in DOM
//check box/ toggle on each bookCard

function readToggle(bookCard) {
    const label = document.createElement("label");
    label.classList.add("complete");

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.name = "complete";
    //toggle.checked = "false";
    toggle.id = "complete";
    toggle.classList.add('togs');

    const span = document.createElement("span");
    span.classList.add("sliderround");

    bookCard.appendChild(label);
    label.appendChild(toggle);
    label.appendChild(span);
};


// click changes complete attribute to indicate read or unread


shelf.addEventListener("click", function (e) {
    if (e.target.classList != "togs") return;
    let selectBook = e.target.closest(".book")
    console.log(e.target.checked)
})


/*
function readBook(e) {
    // change to read
    console.log(e.target.checked);

    if (e.target.checked === false) {
        // if clicked then update complete.checked = true
        e.target.checked = true; // if the Book prototype read status is false change to true // change the book status
      //  console.log(`now finished ${bookCard}`); // if clicked again
        // change back  complete.checked = false
   // } else {
   //     complete.checked = false;
     //   console.log(`nevermind, havent ${bookCard}`); // change back to unread
    };



//  let index = selectBook.getAttribute('id');
 //console.log(index)
    
});*/


//};

// initial value is false // toggles to update book to read or unread

  
    //if (index.complete.checked === false) { // update it to true
   // index.complete.checked = true;  
    //} else {
    //selectBook.complete.checked

    //}
  //  console.log(index.complete.checked);


  // one more that is separate for the form div read toggle
//complete.addEventListener("click", readBook);

showBooks();

/* 
Quality of life:
"are you sure you want to delete" mesage on trash
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
event deglegation - cleaner.
*/
