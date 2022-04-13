import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const BookCard = (props) => {
    return (
        <div className="book" id={props.id} key={props.key}>
            <div className="bookcard-icons">
                <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={(event) =>
                        props.removeBook(
                            event //, book.id
                        )
                    }
                    className="trash-icon"
                    alt="click to delete"
                />

                {props.isRead ? "read" : "unread"}
                <label className="complete">
                    <input
                        onClick={props.readBook}
                        type="checkbox"
                        name="complete"
                        id="complete"
                        value="yes"
                    />
                    <span className="sliderround"></span>
                </label>
            </div>

            <span className="bookcard-title"> {`title: ${props.title}`} </span>
        </div>
    );
};

export default BookCard;
