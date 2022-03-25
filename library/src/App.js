import BookCard from "./components/Card";
import Navbar from "./components/Navbar";
import React, { useState } from "react";


function App() {


  const [myLibrary, setmyLib] = useState(['harry potter'])
  function addBook() {
      setmyLib(prevLib => [...prevLib, prevLib.length + 1])
  }
  
  const bookElements = myLibrary.map(book => <div key={book}>{book} </div>)



  return (
    <div className="App">
  <Navbar /> 
       <button onClick={addBook}>add button test</button>
    
 

  <div className="new-book">
        
  <div className="container">
            <div className="bookshelf"><h2>my bookshelf</h2>
            <BookCard />   <div className="book"> {bookElements}   </div>
            </div>
        </div>

    </div>
    </div>
  );
}

export default App;
