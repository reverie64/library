import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";

// change button text new / hide
///    Total books in library: {totalBooks}    dispatch={dispatch}

const Navbar = ({
    showForm,
    show,
    book,
    handleChange,
    handleSubmit,
    toggleTheme,
    isDarkTheme,
  //  totalBooks,
  //  dispatch,
    title,
    author,
    id
}) => {
    return (
        <header className="App-header">
            <FontAwesomeIcon
                icon={faBookBookmark}
                className="header-image"
                alt=""
            />
            <h1>my library</h1>
         
            <button onClick={toggleTheme}>
                {isDarkTheme ? (
                    <span aria-label="Light mode" role="img">
                        🌞
                    </span>
                ) : (
                    <span aria-label="Dark mode" role="img">
                        🌜
                    </span>
                )}
            </button>
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
                 
               //     title={book.title}
                //    author={book.author}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            )}
        </header>
    );
};

export default Navbar;
