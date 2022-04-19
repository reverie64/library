import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import Form from "./Form";

const BookCard = (props) => {
    const { formData, removeBook, readBook } = props;

    return (
        <div className="book" id={formData.id}>
            <div className="bookcard-icons">
                <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={(event) =>
                        removeBook(
                            event //, book.id
                        )
                    }
                    className="trash-icon"
                    alt="click to delete"
                />

                <label className="complete">
                    {" "}
                    {props.isRead ? "read" : "unread"}{" "}
                </label>
                <input
                    onClick={readBook}
                    type="checkbox"
                    name="complete"
                    id="complete"
                    value="yes"
                />
                <span className="sliderround"></span>
            </div>

            <span className="bookcard-title">{`title: ${formData.title}`}</span>
        </div>
    );
};

export default BookCard;
