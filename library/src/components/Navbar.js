
import React, { useState } from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

// click button to show div with form for new book / click again to hide
// change button text new / hide
//! derived state

const Navbar = (props) => {
    const [show, setShow] = useState(false);

    function showForm() {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header className="App-header">
            <FontAwesomeIcon
                icon={faBookBookmark}
                className="header-image"
                alt=""
            />
            <h1>my library</h1>
            <FontAwesomeIcon
                icon={faSquarePlus}
                onClick={showForm}
                className="add-icon"
                alt="click to add a new book."
            />

            {show && <Form addBook={props.addBook} />}
        </header>
    );
};

export default Navbar;
