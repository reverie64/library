/* in process of converting to react app 


 takes user input from form when submit button is pushed
 generates book in DOM, along with buttons

 adds new Book and adds to myLib arr      
        myLibrary.push(bookCard);


 display each book
 click button to show div with form for new book / click again to hide
 change button text new / hide

 link form data to each bookcard
            on submit
            function formFunc() {
                event.preventDefault();
                bookForm.reset();
                // hide form again
                showForm();

--
 utilities to update books after added to myLibrary and shelf
---

create trash button in DOM and give it click functionality
remove book from library - targeting array and DOM

            shelf.addEventListener("click", function (e) {
                if (e.target.classList != "can") return;
                let selectBook = e.target.closest(".book");

                //let index = selectBook.textContent
                //let index = selectBook.value;
                let index = selectBook.getAttribute("id"); 
                myLibrary.splice(index, 1);
                selectBook.remove();

                //myLibrary = myLibrary.filter(book => book !== index); 
                should be map and not filter.
            });

 create read / unread toggle in DOM
check box/ toggle on each bookCard

 click changes complete attribute to indicate read or unread

shelf.addEventListener("click", function (e) {
    if (e.target.classList != "togs") return;
    let selectBook = e.target.closest(".book");
    console.log(e.target.checked);
    console.log(selectBook);
});

e target = <input type="checkbox" name="complete" id="complete" class="togs">
 selectBook is actual book that its on.
 take that toggle, find book that its on and element in dom
 click changes the value and that updates the book's property
 initial value is false // toggles to update book to read or unread


toggle.checked = "false";
 on click - change the value to match. if its false and clicked, update
 book's property to true


/*
function readBook(e) {
    change to read


    console.log(e.target.checked);

    if (e.target.checked === false) {
         if clicked then update complete.checked = true
        e.target.checked = true; // if the Book prototype read status is false change to true // change the book status
      } else {
      complete.checked = false;
      */
