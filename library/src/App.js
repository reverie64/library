import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";

const App = () => {
    const [book, setBook] = useState({
        id: nanoid(),
        title: "",
      /*  author: "",
        pages: "",
        start: "",
        current: false,
        complete: false,
        end: "",
        rating: "",*/
    });

    const [show, setShow] = useState(false);

    const [isRead, setRead] = useState(false);

    const [library, setLib] = useState(JSON.parse(localStorage.getItem("library")) || []);

    useEffect(() => {
        localStorage.setItem("library", JSON.stringify(library));
    }, [library]);

    useEffect(() => {
        const library = JSON.parse(localStorage.getItem("library"));
        if (library) {
            setLib(library);
        }
    }, []);

//! sets local storage for typing in form. doesnt go into lib though
    useEffect(() => {
        localStorage.setItem("book", JSON.stringify(book));
    }, [book,library]);

//! need to transfer book to library array or get rid of book state altogehter to 
//!keep local storage happy? 
//! maybe there is another way to add both to local storage when lib is updated 
//! too tired to find out now. 
//! could initialize one state as library and use reducer or just add objects
//! initial object in state array of library could be an example book.
//! i would just have to delete it as soon as the user added their fist book to library array. splice? or slice/ whichever doesn't mutate library since its state.
    const handleChange = (e) => { //works!!
        const { name, value, type, checked } = e.target;
        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: type === "checkbox" ? checked : value,
            };
           
        });
        console.log(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       // createBook(book);
        console.log(book);
        //setBook(book);
       setLib((prevLib) => [
           ...prevLib, book]
       
       );

        // clear form
      //  setBook({
        //     id: "",
        //    title: "",
           /* author: "",
            pages: "",
            start: "",
            current: false,
            complete: false,
            end: "",
            rating: "",*/
    //    });
        console.log(library);

       
    };

    const showForm = () => {
        setShow((prevShow) => !prevShow);
    };

    const readBook = () => {
        setRead((prevState) => !prevState);
    };

    const toggle = (id) => {
        setLib((prevLib) => {
            return prevLib.map((book) => {
                return book.id === id
                    ? { ...book, complete: !book.complete }
                    : book;
            });
        });
    };

    const removeBook = (e, bookId) => {
        //    localStorage.removeItem('the item');
        e.stopPropagation();
        //library.filter((book) => bookId === e.target.id);
        console.log("delete");
        setLib((oldLib) => oldLib.filter((book) => book !== e.target.id));
    };

    return (
        <main className="App">
            <Navbar
                book={book}
                showForm={showForm}
                show={show}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <div className="new-book">
                <div className="container">
                    <Shelf
                        key={book.title}
                        //   id={formData.title}
                        title={book.title}
                        book={book}
                        library={library}
                        //  removeBook={removeBook}
                        //    readBook={readBook}
                        //    complete={book.complete}
                        //     toggle={toggle}
                        //    isRead={isRead}
                    />
                </div>
            </div>
        </main>
    );
};

export default App;
