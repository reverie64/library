import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [myLibrary, setLib] = useState(() =>
        JSON.parse(localStorage.getItem("myLibrary"))
    );
    const [show, setShow] = useState(false);

    function showForm() {
        setShow((prevShow) => !prevShow);
    }

   
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        author: "",
        pages: "",
        start: "",
        current: false,
        complete: false,
        end: "",
        rating: "",
        key: nanoid(),
    });

    console.log(formData);

    function handleSubmit(event) {
        event.preventDefault();
        //add form data to myLibrary, then that will add it to local storage?
        setFormData();
       // addBook();
        console.log(formData);
    }

    function addBook() {
        setLib((prevLib) => [...prevLib, myLibrary.length + 1]);
    }

    useEffect(() => {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }, [myLibrary]);

    const [isRead, setRead] = useState(false);
    function readBook() {
        setRead((prevState) => !prevState);
    }
    /*
    function toggle(id) {
        setLib((prevLib) => {
            return prevLib.map((book) => {
                return book.id === id
                    ? { ...book, complete: !book.complete }
                    : book;
            });
        });
    }*/

    const bookElements = myLibrary.map((book) => (
        <BookCard
            key={formData.id}
            id={formData.id}
            title={formData.title}
            removeBook={removeBook}
            readBook={readBook}
            //    complete={book.complete}
            //     toggle={toggle}
            isRead={isRead}
        />
    ));

    function removeBook(event, bookId) {
        //    localStorage.removeItem('the item');
        myLibrary.filter((book) => bookId === event.target.id);
        console.log("delete");
    }

    return (
        <main className="App">
            <Navbar
                addBook={addBook}
                formData={formData}
                setFormData={setFormData}
                showForm={showForm}
            />
 {show && <Form addBook={addBook}
    />}
            <div className="new-book">
                <div className="container">
                    <div className="bookshelf">
                        <h2>my bookshelf</h2>

                        {bookElements}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;
