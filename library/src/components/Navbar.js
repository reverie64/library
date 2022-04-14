
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

// click button to show div with form for new book / click again to hide
// change button text new / hide
//! derived state

const Navbar = (props) => {


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
                onClick={props.showForm}
                className="add-icon"
                alt="click to add a new book."
            />

         
        </header>
    );
};

export default Navbar;
