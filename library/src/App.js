import React, { useState, useEffect, useReducer } from "react";
//import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
//import { library } from "@fortawesome/fontawesome-svg-core";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";

//! reducer handles actions for actual book object

//! context will handle form data? or i would have to set state for each field
/*const initialBook =
    (
    localStorage.getItem("library") == null
     ? [
    {
        id: "",
        title: "",
          read: "",
         current: "",
        completed: "",
    };
,]
  : JSON.parse(localStorage.getItem("library"))
);0*/

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
                totalBooks: state.totalBooks + 1,
            };
        case "REMOVE":
            return state.library.filter(
                (book) => book.id !== action.payload.id
            );

        case "CURRENT":
            return {
                library: state.library.map((book, index) =>
                    index === action.payload.index
                        ? { ...book, current: !book.current }
                        : book
                ),
            };
        case "COMPLETED":
            return {
                library: state.library.map((book, index) =>
                    index === action.payload.index
                        ? { ...book, completed: !book.completed }
                        : book
                ),
            };
        default:
            return state;
    }
};

const App = () => {
    const [{ library }, dispatch] = useReducer(reducer, { library: [] });
    const [book, setBook] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { book: book },
        });
        //clear form setForm() -- but with the temp variable its
        setBook("");
    };

    const handleChange = (e) => {
        //!
        const { name, value, type, checked } = e.target;
        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: type === "checkbox" ? checked : value,
            };
        });
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

    const [show, setShow] = useState(false);
    const showForm = () => {
        setShow((prevShow) => !prevShow);
    };

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
                        onChange={handleChange}
                        book={book} // is t needed?
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