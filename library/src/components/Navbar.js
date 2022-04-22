import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";

// click button to show div with form for new book / click again to hide
// change button text new / hide

const Navbar = ({ showForm, show, book, handleChange, handleSubmit }) => {

    return (
        <header className="App-header">

        
            <FontAwesomeIcon
                icon={faBookBookmark}
                className="header-image"
                alt=""
            />
            <h1>my library</h1>

            {show ? (
                <FontAwesomeIcon
                    icon={faMinus}
                    onClick={showForm}
                    className="minus-icon"
                    alt="minimize form."
                />
            ) : (
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={showForm}
                    className="add-icon"
                    alt="show form to add a new book."
                />
            )}

            {show && (
                <Form
                    book={book}
                    showForm={showForm}
                    show={show}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </header>
    );
};

export default Navbar;
