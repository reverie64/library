import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";

const App = (props) => {
    const [myLibrary, setLib] = useState(
        () => JSON.parse(localStorage.getItem("myLibrary")) || []
    );

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
    });

    console.log(formData);



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
            key={book.id}
            id={book.id}
            title={book.title}
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
            <Navbar addBook={addBook}
            formData={formData} />

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
