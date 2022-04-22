import BookCard from "./BookCard";

const Shelf = ({ book, removeBook, readBook, library }) => {
    const bookElements = library.map((bookk) => (
        <BookCard
            key={book.title}
            title={book.title}
            removeBook={removeBook}
            readBook={readBook}
            //    complete={book.complete}
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
