import trashIcon from "../images/trashIcon.png";
import React, { useState } from "react";

// ! derived state change to use effect or move state to app

function BookCard(props) {
    const [isRead, setRead] = useState(false);

    function readBook() {
        setRead((prevState) => !prevState);
    }

    function trashCan() {
        console.log("delete");
    }

    return (
        <div className="book">
            title: {props.title}
            <img
                onClick={trashCan}
                className="trash-icon"
                src={trashIcon}
                alt="click to delete"
            />
            <div className="hi">
                {isRead ? "read" : "unread"}
                <label className="complete">
                    <input
                        onClick={readBook}
                        type="checkbox"
                        name="complete"
                        id="complete"
                        value="yes"
                    />
                    <span className="sliderround"></span>
                </label>
            </div>
        </div>
    );
}

export default BookCard;