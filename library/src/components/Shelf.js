import BookCard from "./BookCard";

const Shelf = ({ book, removeBook, readBook, library, handleComplete }) => {
    const bookElements = library.map((book) => (
        <BookCard
            key={book.id}
            title={book.title}
            removeBook={removeBook}
            readBook={readBook}
                checked={book.complete}
                onChange={() => handleComplete(book)}
            //     toggle={toggle}
            //    isRead={isRead}
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
