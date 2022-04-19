import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const App = () => {
    const [show, setShow] = useState(false);

    const [isRead, setRead] = useState(false);
    const [myLibrary, setLib] = useState([]);

    const [formData, setFormData] = useState({
        id: nanoid(),
        title: "",
        author: "",
        pages: "",
        start: "",
        current: false,
        complete: false,
        end: "",
        rating: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { name, value, type, checked } = event.target;
        //add form data to new book object that goes into myLibrary, then that will add it to local storage?
        //needs to update myLib and then update book elements to display new book
        addBook();
       //reset()
    }

    useEffect(() => {
        setLib((prevLib) => [formData, ...prevLib]);
    }, );


    function addBook() {
        console.log(formData);
        setLib((prevLib) => [formData, ...prevLib]);
        console.log(myLibrary);
    }

 
    function showForm() {
        setShow((prevShow) => !prevShow);
    }
    function readBook() {
        setRead((prevState) => !prevState);
    }



    const handleReset = () => { setFormData()  
    };

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
                formData={formData}
                showForm={showForm}
                show={show}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

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
