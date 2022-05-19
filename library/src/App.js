import { useState, useEffect, useReducer } from "react";
//import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";


//! reducer handles actions for actual book object

//! context will handle form data? or i would have to set state for each field


const initialBook =
    //(
    //localStorage.getItem("library") == null
    // ? [
    {
        id: "",
        title: "",
        read: "",
        current: "",
    };
//,]
//  : JSON.parse(localStorage.getItem("library"))
//);

 

export const reducer = (library, action) => {  // library = state
    switch (action.type) {
        case "ADD":
            return [
                //setLib(library => [formData, ...library]);
                ...library, newBook(action.payload.book)
            ];
        case "REMOVE":
                  return library.filter(book => book.id !== action.payload.id);

         case "CURRENT":
            return library.map((book) => {
                if (book.id === action.payload.id) {
                    return { ...book, current: !book.current };
                }
                return book
            });  
        case "COMPLETE":
            return library.map((book) => {
                if (book.id === action.payload.id) {
                    return { ...book, complete: !book.complete };
                }
                return book
            });  
   default:
        return library
    };
};

const newBook = (book) => {
    return {id: Date.now(), book: book, complete: false}
}



const App = () => {


    const [library, dispatch] = useReducer(reducer, initialBook);
    const [book, setBook] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { book: book } });
                     //clear form setForm() -- but with the temp variable its 
            setBook('')
    };

    /*
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
*/
    
//! form must be linked - identify all as sub type of obj book: book { title, pg, ... }  USE CONTEXT to pass data


    /*
submit form , tie values to book state was  setBook(target value or whatever) 
then add the new book object to library array 

    const handleSubmit = (e) => {
        e.preventDefault();
        setBook(book);
handleAddNew()
                            clear form
       setBook({
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
    }

     //!actions change from state to useReducer DONE!!
  setLib((prevLib) => [
          ...prevLib, book]
       setLib(library => [formData, ...library]);
    ;*/




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



    /* const [book, setBook] = useState({
        id: nanoid(),
        title: "",
       author: "",
        pages: "",
        start: "",
        current: false,
        complete: false,
        end: "",
        rating: "",*/
    // });

    //const [library, setLib] = useState(JSON.parse(localStorage.getItem("library")) || []);

    /*


    useEffect(() => {
        localStorage.setItem("library", JSON.stringify(library));
    }, [library]);
/* */ /*
    useEffect(() => {
        const library = JSON.parse(localStorage.getItem("library"));
        if (library) {
            setLib(library);
        }
    }, []);*/

    // sets local storage for typing in form. doesnt go into lib though
    /*

    useEffect(() => {
        localStorage.setItem("book", JSON.stringify(book));
    }, [book,library]);
*/

   
    //! maybe there is another way to add both to local storage when lib is updated
    //! too tired to find out now.

    // form logic - separate state for showing. unsure about filling out form
    // as it has to connect to each book object

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
                        //book={book}
                        showForm={showForm}
                        show={show}
                        handleSubmit={handleSubmit}
                        toggleTheme={toggleTheme}
                        isDarkTheme={isDarkTheme}
                    />

                    <div className="new-book">
                        <div className="container">
                            <Shelf
                            dispatch={dispatch}
                                // key={book.title}
                                //   id={formData.title}
                                //  title={book.title}
                                //   book={book}
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

/*  
const removeBook = (e, bookId) => {
     localStorage.removeItem('the item');
        e.stopPropagation();
        library.filter((book) => bookId === e.target.id);
        setLib((oldLib) => oldLib.filter((book) => book !== e.target.id));
    }; 
    

   const [isCurrent, setCurrent] = useState(false);
        const currentBook = () => {
        setCurrent((prevState) => !prevState);
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
    */

export default App;
