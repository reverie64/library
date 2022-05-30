import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";


// { // when clicked, remove bookcard from dom}
//dispatch () =>  dispatch({ type: "REMOVE", payload: { book: book } })
//() =>
                 //       dispatch({ type: "COMPLETE", payload: { id: book.id } })

//{handleChange, title, book, library, id, author, dispatch}

const BookCard = ( {handleChange, title, book, id, author } ) => {


    return (
        <div className="bookcard">
            <div
                className="bookcard-icons"
            >
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className="trash-icon"
                    alt="click to delete"
               //     onClick={handleChange} 
                /> 

                <label className="complete"></label>
                <input
                    type="checkbox"
                    name="complete"
                    value="yes"
                //    onClick={handleChange}
                />
                <span className="sliderround"></span>
                <span className="bookcard-title">{`title: ${book.title}`}</span>
            </div>
        </div>
    );
};

export default BookCard;
