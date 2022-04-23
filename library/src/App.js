import React, { useState, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";

import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";
import Component from "./components/Component";

const initialBooks = [
    {
        id: 1,
        title: "Example book here.",
        read: false,
        current: false,
    },
    {
        id: 2,
        title: "add your book.",
        read: false,
        current: false,
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state // add book to library
     /*   case 'REMOVE':
            return state.filter((book) => {
               if (book.id === !action.id }) //remove book from library //state - action. */
        case 'CURRENT':
            return state.map((book) => {
                if (book.id === action.id) { 
                    return {...book, current: !book.current }
                 } else {
                     return book;
                 }
            })
        case 'COMPLETE':
            return state.map((book) => {
                if (book.id === action.id) {
                    return {...book, complete: !book.complete  };
                 } else {
                     return book;
                 }
            })
        default:
            return state;
            
    }
}


const App = () => {



/*  //! actions change from state to useReducer
  // setLib((prevLib) => [
       //    ...prevLib, book]
       


const removeBook = (e, bookId) => {
        //    localStorage.removeItem('the item');
        e.stopPropagation();
        //library.filter((book) => bookId === e.target.id);
        console.log("delete");
        setLib((oldLib) => oldLib.filter((book) => book !== e.target.id));
    }; 
    

   const [isCurrent, setCurrent] = useState(false);
        const curentBook = () => {
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



    const [library, dispatch] = useReducer(reducer, initialBooks);

const handleAddNew = (book) => {
    dispatch({
        type: 'ADD',
        id: book.id
       // payload: library,
    })
}

const handleRemove = (library) => {
    dispatch({
        type: 'REMOVE',
   //     id: book.id
        //payload: library,
    })
}

const handleCurrent = (library) => {
    dispatch({
        type: 'CURRENT',
   //     id: book.id
        //payload: library,
    })
}

const handleComplete = (book) => {
    dispatch({
        type: 'COMPLETE',
    //    payload: library,
    id: book.id
    })
}








   /* const [book, setBook] = useState({
        id: nanoid(),
        title: "",
      /*  author: "",
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
*/
//! need to transfer book to library array or get rid of book state altogehter to 
//!keep local storage happy? 
//! maybe there is another way to add both to local storage when lib is updated 
//! too tired to find out now. 
//! could initialize one state as library and use reducer or just add objects
//! initial object in state array of library could be an example book.
//! i would just have to delete it as soon as the user added their fist book to library array. splice? or slice/ whichever doesn't mutate library since its state.
    

// form logic - separate state for showing. unsure about filling out form 
// as it has to connect to each book object 

const [show, setShow] = useState(false);
const showForm = () => {
    setShow((prevShow) => !prevShow);
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
    const handleSubmit = (e) => {
        e.preventDefault();
       // createBook(book);
     //   console.log(book);
        //setBook(book);
//! useReducer - add instead of state - not sure if right - tired.
handleAddNew()
    
     

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

 



   

    return (
        <main className="App">
            <Navbar
            //    book={book}
                showForm={showForm}
                show={show}
   //             handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <div className="new-book">
                <div className="container">
                    <Shelf
                       // key={book.title}
                        //   id={formData.title}
                      //  title={book.title}
                     //   book={book}
                        library={library}
                     //   checked={book.complete}
                        handleComplete={handleComplete}
                        handleAddNew={handleAddNew}
                        //  removeBook={removeBook}
                        //    readBook={readBook}
                        //    complete={book.complete}
                        //     toggle={toggle}
                        //    isRead={isRead}
                    />
                </div>
                <Component />
            </div>
        </main>
    );
};

export default App;
