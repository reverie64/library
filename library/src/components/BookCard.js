import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";


const BookCard = ( { book, removeBook, readBook, isRead } ) => {

    return (
        <div className="book"   >
            <div className="bookcard-icons"
             key={book.title} 
         
         >
                <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={(e) =>
                        removeBook(
                            e, book.id
                        )
                    }
                    className="trash-icon"
                    alt="click to delete"
                />

                <label className="complete">
                    {isRead ? "read" : "unread"}
                </label>
                <input
                    onClick={readBook}
                    type="checkbox"
                    name="complete"
                    id="complete"
                    value="yes"
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.title}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
