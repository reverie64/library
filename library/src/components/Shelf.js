import BookCard from "./BookCard";


/*//checked={book.complete}         title={book.title}
     dispatch={dispatch}
onChange={() => handleComplete(book)}*/


const Shelf = ({ book, library, dispatch} ) => {




    return (
        <div className="bookshelf">
            <h2>my bookshelf</h2>
         {library.map((book, index) => {
                        return <BookCard key={book.index} book={book} />;
                    })}
        </div>
    );
};

export default Shelf;
