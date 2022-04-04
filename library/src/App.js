import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";

function App(props) {
    const [myLibrary, setLib] = useState(
        () => JSON.parse(localStorage.getItem("myLibrary")) ||
    [ /*insert placeholder card? */ ]
    ); //or add a book button?

    function addBook() {
        setLib((prevLib) => [...prevLib, myLibrary.length + 1]);
    }

    useEffect(() => {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }, [myLibrary]);
    
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
            //    complete={book.complete}
            //     toggle={toggle}
        />
    ));

    return (
        <main className="App">
            <Navbar />
            <button onClick={addBook}>add button test</button>

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
}

export default App;
