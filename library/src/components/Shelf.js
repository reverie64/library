import BookCard from "./BookCard";

/*//checked={book.complete}         title={book.title}
     dispatch={dispatch}
onChange={() => handleComplete(book)}*/

const Shelf = ({ book, library, dispatch }) => {
    return (
        <div className="bookshelf">
            <h2>my bookshelf </h2>
            {JSON.stringify(book, null, 2)}
            {library.map((book, id) => {
                return (
                    <BookCard
                        key={book.id}
                        book={book}
                        title={book.title}
                        id={book.id}
                        author={book.author}
                        dispatch={dispatch}
                    />
                );
            })}
        </div>
    );
};

export default Shelf;
