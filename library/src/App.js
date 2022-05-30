import React, { useState, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";

//const { name, value} = e.target;
//  setBook((prevBook) => {
//...prevBook,
// [name]: value,
//type === "checkbox" ? checked : value,

/*
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                library: [
                    ...state.library,
                    {
                        book: action.payload.book,

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
                    state.library.filter((book) => book.id !== action.payload),
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
*/
const App = () => {
    /*
  const [{ library, totalBooks }, dispatch] = useReducer(reducer, { library: [], totalBooks: 0 });
const [book, setBook  ] = useState(  {title: "",
        author: "", 
    id: nanoid()
}
        );
docs.title
*/

    const [library, setLibrary] = useState([]);
    const [book, setBook] = useState();

    let url = `http://openlibrary.org/search.json?`;

    const getBookInfo = async () => {
        const result = await axios.get(`${url}title=${book}`);
        console.log(result.docs);
        setLibrary(result.docs);
    };

/* 
    const getBookImage = async () => {
   
        async function fetchImage(url) {
    const img = new Image();
    return new Promise((res, rej) => {
        img.onload = () => res(img);
        img.onerror = e => rej(e);
        img.src = url;
    });
}
const img = await fetchImage('https://covers.openlibrary.org/b/id/12547191-L.jpg');
const w = img.width;
const h = img.height;
    };*/

    /*useEffect(() => {
		getBookInfo();
	}, []);*/

    //const [book, setBook] = useState();

    const handleChange = (e) => {
        //!
        //const { name, value, type, checked } = e.target;
       /* const { name, value } = e.target;
        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: value,
                //type === "checkbox" ? checked : value,
            };
        });*/
        setBook(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getBookInfo();
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
                        //  totalBooks={totalBooks}
                        // dispatch={dispatch}
                        library={library}
                        book={book}
                    />

                    <div className="new-book">
                        <div className="container">
                            <Shelf
                                //   dispatch={dispatch}
                                book={book}
                                library={library}
                      //          title={book.title}
                       //         id={book.id}
                       //         author={book.author}
                                
                            />
                        </div>
                    </div>
                </main>
            </>
        </ThemeProvider>
    );
};

export default App;
