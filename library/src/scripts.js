
/* in process of converting to react app */


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

class Book {
    constructor(title, author, pages, start, current, complete, end, rating, bookCard, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.start = start;
        this.current = current;
        this.complete = complete;
        this.end = end;
        this.rating = rating;
        this.bookCard = bookCard;
        this.index = function () {
            index = myLibrary.findIndex(bookCard);

        };
        this.construct = function () {
            bookCard = document.createElement('div');
            shelf.appendChild(bookCard);
         //   bookCard.classList.add('book');
            bookCard.textContent = title;
            bookCard.id = index;
        };
        /*this.info = function () {
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
            );*/
        //};
    }
}
// this.index = myLibrary.findIndex(bookCard)

// takes user input from form when submit button is pushed
// generates book in DOM, along with buttons

// adds new Book and adds to myLib arr
function addBook(title, author, pages, start, current, complete, end, rating) {
    let bookCard = new Book(
        title,
        author,
        pages,
        start,
        current,
        complete,
        end,
        rating
    );
       
myLibrary.push(bookCard);
console.log(bookCard)
return bookCard
    // bookCard.id = newBook.title;
    //  readToggle(bookCard);
    //   trashCan(bookCard);
    //   console.log(bookCard.getAttribute('id'))
};

addBook('game of thrones', 'george rr martin', '1000', 'true', 'false', 'true', 'true', '1');
addBook('harry potter')
console.log(myLibrary)


// display each book
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
  myLibrary[i].construct()
    };
};


/*
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
    }
}

newBut.addEventListener("click", showForm);
*/

    // link form data to each bookcard
 /*   title = title.value;
      author = author.value;
    pages = pages.value;
    start = start.value;
    current = current.checked;
    complete = complete.checked;
    end = end.value;
    rating = rating.value;*/




// on submit
function formFunc() {
    event.preventDefault();
    bookForm.reset();
    // hide form again
    showForm();
}

submitBut.addEventListener("click", () => {
    addBook(title, author, pages, start, current, complete, end, rating); // ! change
    formFunc();
});






//---
// utilities to update books after added to myLibrary and shelf
//---

// create trash button in DOM and give it click functionality
function trashCan(bookCard) {
    const trash = document.createElement("button");
   // trash.classList.add("can");
    //  trash.textContent = "remove";
    bookCard.appendChild(trash);
}

// remove book from library - targeting array and DOM
shelf.addEventListener("click", function (e) {
    if (e.target.classList != "can") return;
    let selectBook = e.target.closest(".book");

    //let index = selectBook.textContent
    //let index = selectBook.value;
    let index = selectBook.getAttribute("id"); //!not splicing right one . only first always,
    console.log(index);
    myLibrary.splice(index, 1);
    selectBook.remove();

    //myLibrary = myLibrary.filter(book => book !== index); 
    //! should be map and not filter.
    console.log(myLibrary);
});

/*
// create read / unread toggle in DOM
//check box/ toggle on each bookCard

function readToggle(bookCard) {
    const label = document.createElement("label");
    label.classList.add("complete");

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.name = "complete";
    toggle.id = "complete";
    toggle.classList.add("togs");

    const span = document.createElement("span");
    span.classList.add("sliderround");

    bookCard.appendChild(label);
    label.appendChild(toggle);
    label.appendChild(span);
} */

// click changes complete attribute to indicate read or unread

shelf.addEventListener("click", function (e) {
    if (e.target.classList != "togs") return;
    let selectBook = e.target.closest(".book"); // !works now need to change actual value
    console.log(e.target.checked);
    console.log(selectBook);
});

//e target = <input type="checkbox" name="complete" id="complete" class="togs">
// selectBook is actual book that its on.
// take that toggle, find book that its on and element in dom
// click changes the value and that updates the book's property

//toggle.checked = "false";
// on click - change the value to match. if its false and clicked, update
// book's property to true

// if its already true and clicked, change property to false

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

// !one more that is separate for the form div read toggle

//complete.addEventListener("click", readBook);

showBooks();

/* 

*/
