import React, { useState, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";

/* before - sort of worked
const initialState = { title: "", author: "", id: nanoid(), library: [], totalBooks: 0 };

input values = all form - entire book { all fields }
take all input values to add case 

cannot have library with out taking first book from form 
(later check local storage, if local storage = 0, then require form  - use effect)

*/

    //const { name, value} = e.target;
    //  setBook((prevBook) => {
    //...prevBook,
    // [name]: value,
    //type === "checkbox" ? checked : value,


  const initialState = {
    book: { title: "", author: "", id: nanoid() },
    library: [],
    totalBooks: 0,
};  

const reducer = (state, action) => {
    switch (action.type) {
        case "VALUES": // need all form values to equal book 
            //action.payload;
            return {
                ...state, 
              //  [action.payload.name]: action.payload.value
             };

        case "ADD":
            return {
               /* library: [
                ...state.library, 
                { book: action.payload.book,

                }
                   title: action.payload.title,
                   author: action.payload.author,
                   id: nanoid(),*/
/*
                library: [
                  ...state.library, state.book
                    action.payload.book,
                    , state.author, state.title, state.id
                ],
            }; //action.payload*/

          library: [
                    ...state.library,
                    {
                      book: action.payload.book,
                        title: action.payload.title,
                        author: action.payload.author,
                        id: action.payload.id,
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
                        (book) => book.id !== action.payload.book.id
                    ),
                ],
                totalBooks: state.totalBooks - 1,
            };

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
                    id === action.payload.book.id
                        ? { ...book, completed: !book.completed }
                        : book
                ),
                totalBooks: state.totalBooks,
            };
           /* case "RESET":
                return 
                    init(action.payload)
                */
        default:
            return state;
    }
};

const App = () => {
  /*  const [
        {
            book //: { title, author, id }
          //  library,
         //   totalBooks,
        },
        dispatch,
    ] = useReducer(reducer, initialState, init);*/


const [
        {
            book, //: { title, author, id }
            library,
            totalBooks,
        },
        dispatch,
    ] = useReducer(reducer, initialState);


    const handleChange = (e) => {
        const target = e.target;
        dispatch({ type: "VALUES", payload: target });
        console.log(target.value);
    };


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
          //  payload: { book: book },
            payload: book,
            // reset form 
        });


       
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
                        totalBooks={totalBooks}
                        dispatch={dispatch}
                        library={library}
                        book={book}
                    />

                    <div className="new-book">
                        <div className="container">
                            <Shelf
                                dispatch={dispatch}
                                book={book}
                                library={library}
                                title={book.title}
                                id={book.id}
                                author={book.author}
                            />
                        </div>
                    </div>
                </main>
            </>
        </ThemeProvider>
    );
};
};

export default App;