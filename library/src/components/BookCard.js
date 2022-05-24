import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";


// { // when clicked, remove bookcard from dom}


const BookCard = ( {book, dispatch } ) => {


    return (
        <div className="bookcard">
            <div
                className="bookcard-icons"
            >
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className="trash-icon"
                    alt="click to delete"
                    onClick={ () =>  dispatch({ type: "REMOVE", payload: { book: book } }) } 
                /> 

                <label className="complete"></label>
                <input
                    type="checkbox"
                    name="complete"
                    value="yes"
                    onClick={ () =>
                        dispatch({ type: "COMPLETE", payload: { id: book.id } })
                    }
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.title}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
