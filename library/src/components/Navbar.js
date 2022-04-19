import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";

// click button to show div with form for new book / click again to hide
// change button text new / hide

const Navbar = (props) => {
    const { showForm, show, formData, handleChange, handleSubmit } = props;

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

            {show && (
                <Form
                    formData={formData}
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
