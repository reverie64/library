import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const BookCard = (props) => {
    const { formData, removeBook, readBook } = props;

    return (
        <div className="book"   >
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
                    {props.isRead ? "read" : "unread"}
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
        </div>
    );
};

export default BookCard;

/*     key={formData.index}  id={formData.id}>  

<span className="bookcard-title">{`title: ${formData.title}`}</span> */
