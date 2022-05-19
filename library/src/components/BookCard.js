import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { reducer } from "../App.js";

//                 {isRead ? "read" : "unread"}

const BookCard = ({
    book,
    dispatch

    //removeBook, readBook, isRead         onClick={readBook}
    //        onClick={(e) => removeBook( e, book.id )  }
}) => {
    return (
        <div className="book">
            <div className="bookcard-icons" key={book.title}>
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className="trash-icon"
                    alt="click to delete"
                     onClick={ () => dispatch({ type: "REMOVE", payload: { id: book.id} })}
                />

                <label className="complete"></label>
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    value="yes"
                    onClick={() => dispatch({ type: reducer.action.complete, payload: { id: book.id} })}
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.title}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
