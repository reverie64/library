
const container = document.getElementById('container');
const book = document.getElementById('book');


let mylibrary = [
    "harry potter", "game of thrones", "noragami"
];


function Books(title, author, pages, complete){
    this.title = title
    this.author = author
    this.pages = pages
    this.complete = complete
    this.info = function() {
       return title, author, pages, complete
    }
    console.log(Books.info());
}


// displays all books
function showBooks () {
    for (let i = 0; i < mylibrary.length; i++){
        // display each book
    }

} // or use for each?


// allows user to input a new book in form (popup?)
function addBook(){
  
}

// button to remove book from library
function remove(){

}


// toggles book to read or unread based on book prototype
function readBook(){

}


mylibrary.push()