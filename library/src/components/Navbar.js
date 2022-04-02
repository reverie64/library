import addIcon from "../images/addIcon.png";
import React, {useState} from "react";
import Form from "./Form";

// click button to show div with form for new book / click again to hide
// change button text new / hide
 //! derived state

function Navbar(props) {
   

    const [isShown, setShown] = useState(false);

    function showForm() {
        setShown((prevState) => !prevState);
    }

    return (
        <header className="App-header">
            <img
                className="header-image"
                src="https://toppng.com/uploads/preview/love-book-icon-filosofia-icon-11553486719rvc03m6nnz.png"
                alt="book"
            />
            <h1>my library</h1>

            <img
                onClick={showForm}
                className="add-icon"
                src={addIcon}
                alt="click to add a new book."
            />

            {isShown && <Form />}
        </header>
    );
}

export default Navbar;
