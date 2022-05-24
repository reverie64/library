import React, { useState, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";


const initialState = { title: "", author: "", id: nanoid(), library: [], totalBooks: 0 };



const reducer = (state, action) => {
    switch (action.type) {
        case "VALUES":
            const { name, value } = action.payload;
            return { ...state, [name]: value };

        case "ADD":
            return {
                ...state, 
            //  //  title: action.payload.title,
                 //       author: action.payload.author,
                    //    id: nanoid(),
                        library: [...state.library, action.payload.id
                            //, state.author, state.title, state.id
                    ]} //action.payload
              /*  library: [
                    ...state.library,
                    {
                     //   book: action.payload.book,
                        title: action.payload.title,
                        author: action.payload.author,
                        id: nanoid(),
                        // completed: false,
                        //  current: false,
                    },
                ],
                totalBooks: state.totalBooks + 1,
            };*/
        case "REMOVE":
            return {
                library: [
                    state.library.filter(
                        (book) => book.id !== action.payload.id
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
    const [{ title, author, id, library, totalBooks }, dispatch] = useReducer(
        reducer,
        initialState
    );
    /*const [book, setBook  ] = useState(  {title: "",
        author: "", 
    id: nanoid()
}
        );
*/

  // base
    //const { name, value, type, checked } = e.target;
//const { name, value} = e.target;
      //  setBook((prevBook) => {
                  //...prevBook,
               // [name]: value,
                //type === "checkbox" ? checked : value,


    const handleChange = (e) => {
               const target = e.target
                dispatch({ type: 'VALUES', payload: target})
        console.log(target.value)
            };
       // });
    


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
            payload: { id: id},
        });
        /*
        dispatch({
            type: "ADD",
            payload: { book: book },
        });*/
       // console.log(book);
        //clear form setForm() -- but with the temp variable its
      //  setBook({ title: "", author: "", id: nanoid() });
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
                       // setBook={setBook}
                       // book={book} // is t needed?
                        totalBooks={totalBooks}
                        dispatch={dispatch}
                        library={library}
                    />

                    <div className="new-book">
                        <div className="container">
                            <Shelf
                                dispatch={dispatch}
                            //    book={book}
                                library={library}
                                title={title}
                                id={id}
                                author={author}
                    
                            />
                        </div>
                    </div>
                </main>
            </>
        </ThemeProvider>
    );
};

export default App;
