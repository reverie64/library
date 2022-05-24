import React, { useState, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
//import { library } from "@fortawesome/fontawesome-svg-core";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";




const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                library: [
                    ...state.library,
                    {
                        book: action.payload.book,
                        title: action.payload.book.title,
                        author: action.payload.book.author,
                        id: nanoid(),
                       // completed: false,
                      //  current: false,
                    },
                ],
                totalBooks: state.totalBooks + 1,
            };
        case "REMOVE":
            return {
            library: [ 
                 state.library.filter(
                (book) => book.id !== action.payload
            )],
              totalBooks: state.totalBooks - 1,
                 }
            
            ;

        case "CURRENT":
            return {
                library: state.library.map((book, id) =>
                    id === action.payload.id
                        ? { ...book, current: !book.current }
                        : book
                ),
                 totalBooks: state.totalBooks,
            };
        case "COMPLETED":
            return {
                library: state.library.map((book, id) =>
                    id === action.payload.id
                        ? { ...book, completed: !book.completed }
                        : book
                ),
                 totalBooks: state.totalBooks,
            };
        default:
            return state;
    }
};


const App = () => {
    const [{ library, totalBooks }, dispatch] = useReducer(reducer, { library: [], totalBooks: 0 });
const [book, setBook  ] = useState(  {title: "",
        author: "", 
    id: nanoid()
}
        );




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


const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { book: book },
        });
        console.log(book)
        //clear form setForm() -- but with the temp variable its
      setBook({title: "", author: "", id: nanoid()});
    
    };



/*
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { book: book },
        });
        console.log(book)
        //clear form setForm() -- but with the temp variable its
      setBook({title: "", author: "", id: new Date().getTime()});
    
    };*/


    // base
    const handleChange = (e) => {
        //!
        //const { name, value, type, checked } = e.target;
const { name, value} = e.target;
        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: value,
                //type === "checkbox" ? checked : value,
            };
        });
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
                            handleChange={handleChange}
                              setBook={setBook}
                             book={book} // is t needed?
                            totalBooks={totalBooks}
                            dispatch={dispatch}
                        />

                        <div className="new-book">
                            <div className="container">

                            
                                <Shelf 
                                dispatch={dispatch}
                                book={book}
                                library={library}
title={book.title} id={book.id} author={book.author}
                                />
                            </div>
                        </div>
                    </main>
            </>
        </ThemeProvider>
    );
};

export default App;
