import BookCard from "./BookCard";

/*//checked={book.complete}         title={book.title}
     dispatch={dispatch}
onChange={() => handleComplete(book)}*/

const Shelf = ({ title, author, id, book, library, dispatch }) => {
    return (
        <div className="bookshelf">
            <h2>my bookshelf </h2>
            {JSON.stringify(book, null, 2)}
            {library.map((title, author, id) => {
                return (
                    <BookCard
                        key={id}
                        book={book}
                        title={title}
                        id={id}
                        author={author}
                        dispatch={dispatch}
                        library={library}
                    />
                );
            })}
        </div>
    );
};

export default Shelf;
