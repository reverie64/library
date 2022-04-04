import addIcon from "../images/addIcon.png";
import React, {useState} from "react";
import Form from "./Form";

// click button to show div with form for new book / click again to hide
// change button text new / hide
 //! derived state

function Navbar(props) {
   

    const [show, setShow] = useState(false);

    function showForm() {
        setShow(prevShow => !prevShow);
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

            {show && <Form />}
        </header>
    );
}

export default Navbar;
