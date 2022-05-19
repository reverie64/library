import BookCard from "./BookCard";
import { reducer } from "../App";

//             onChange={() => handleComplete(book)}


const Shelf = ({ book, library, dispatch} ) => {


    const bookElements = library.map((book) => (
        <BookCard
            key={book.id}
            title={book.title}
checked={book.complete}
    
            dispatch={dispatch}
        />
    ));
    return (
        <div className="bookshelf">
            <h2>my bookshelf</h2>
            {bookElements}
        </div>
    );
};

export default Shelf;
