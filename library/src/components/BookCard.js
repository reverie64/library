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
                        dispatch({ type: "REMOVE", payload: { book: book } })
                    }
                /> // when clicked, remove bookcard from dom

                <label className="complete"></label>
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    value="yes"
                    onClick={e =>
                        dispatch({ type: "COMPLETE", payload: { book: book} })
                    }
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.book}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
