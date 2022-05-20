import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const BookCard = ({ book, dispatch }) => {
    return (
        <div className="bookcard">
            <div
                className="bookcard-icons" // key={book.id}
            >
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className="trash-icon"
                    alt="click to delete"
                    onClick={() =>
                        dispatch({ type: "REMOVE", payload: { id: book.id } })
                    }
                />

                <label className="complete"></label>
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    value="yes"
                    onClick={() =>
                        dispatch({ type: "COMPLETE", payload: { id: book.id } })
                    }
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.book}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
