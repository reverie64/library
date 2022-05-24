import React, { useState, useEffect, useReducer } from "react";
//import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
//import { library } from "@fortawesome/fontawesome-svg-core";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";


//! context will handle form data? or i would have to set state for each field

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                library: [
                    ...state.library,
                    {
                        book: action.payload.book,
                        completed: false,
                        current: false,
                    },
                ],
                totalBooks: state.totalBooks + 1
            };
        case "REMOVE": //need to remove bookcard on click
            return {
                library: [
                    state.library.filter((book, index) => 
                // return all books with an 
            index !== action.payload.index
                )
                ],
                totalBooks: state.totalBooks - 1
            };

        case "CURRENT":
            return {
                library: state.library.map((book, index) =>
                    index === action.payload.index
                        ? { ...book, current: !book.current }
                        : book
                ),
                totalBooks: state.totalBooks
            };
        case "COMPLETED":
            return {
                library: state.library.map((book, index) =>
                    index === action.payload.index
                        ? { ...book, completed: !book.completed }
                        : book
                ),
                totalBooks: state.totalBooks
            };
        default:
            return state;
    }
};

const App = () => {
    const [{ library, totalBooks }, dispatch] = useReducer(reducer, { library: [], totalBooks: 0 });
    const [book, setBook] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { book: book },
        });
        setBook("");
    };
/*

    const handleChange = (e) => {
        { name, value, type, checked } = e.target;
        setBook(  [name]: type === "checkbox" ? checked : value
        )
    }*/
        //!*/

        /*const { name, value, type, checked } = e.target;
        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };*/


    const [show, setShow] = useState(false);
    const showForm = () => {
        setShow((prevShow) => !prevShow);
    };


    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => {
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme && ["dark", "light"].includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);

/*  onChange={handleChange}*/ 

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />

                <main className="App">
                    <Navbar
                        toggleTheme={toggleTheme}
                        isDarkTheme={isDarkTheme}
                        showForm={showForm}
                        show={show}
                        handleSubmit={handleSubmit}
                      setBook={setBook}
                        book={book} // is t needed?
                        totalBooks={totalBooks}
                    />
                  
                    <div className="new-book">
                        <div className="container">
                            <Shelf
                                dispatch={dispatch}
                                // key={book.title}
                                //   id={formData.title}
                                //  title={book.title}
                                book={book}
                                library={library}
                                //    complete={book.complete}
                            />
                        </div>
                    </div>
                </main>
            </>
        </ThemeProvider>
    );
};

export default App;