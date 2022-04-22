import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";


const App = () => {
    const [show, setShow] = useState(false);

    const [isRead, setRead] = useState(false);

    const [library, setLib] = useState([]);

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => {
            return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
            }
        });
    }

const templateBook = () => {
    setFormData({ id: "template",
    title: "Your book here.",
    author: "",
    pages: "",
    start: "",
    current: false,
    complete: false,
    end: "",
    rating: "",})
}


//! not adding formdata to library state array here 
const addBook = () => {
    console.log(formData);
    setLib(library => [formData, ...library]);
    console.log(library);
}




    const handleSubmit = (e) => {
        e.preventDefault();
        //add form data to to local storage
      addBook();
        //reset()
    }
/*
    useEffect(() => {
        addBook()

    }, [formData]);
*/


    const showForm = () => {
        setShow((prevShow) => !prevShow);
    }

    const readBook = () => {
        setRead((prevState) => !prevState);
    }

    const handleReset = () => {
        setFormData("");
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

    const bookElements = library.map((book) => (
        <BookCard
           key={formData.id}
           id={formData.id}
            title={formData.title}
          //  removeBook={removeBook}
            readBook={readBook}
            //    complete={book.complete}
            //     toggle={toggle}
            isRead={isRead}
        />
    ));
/*
    const removeBook = (e, bookId) => {
        //    localStorage.removeItem('the item');
        library.filter((book) => bookId === e.target.id);
        console.log("delete");
    }*/

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
                     test flow.
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;


/*    {bookElements} 
{library.length < 1 ? templateBook : bookElements}
*/ 