import BookCard from "./BookCard";

/*//checked={book.complete}         title={book.title}
     dispatch={dispatch}
onChange={() => handleComplete(book)}



      {JSON.stringify(book, null, 2)}
         
{ title, author, id, book, library, dispatch }

   {props.library.map((book, index) => (
          <div className="bookcard">
          
           </div>
      ))}


*/
 //  dispatch={dispatch}


const Shelf = ({ title, author, id, book, library, handleChange }) => {
    return (
        <div className="bookshelf">
            <h2>my bookshelf </h2>
      {library.map((book, id) => {
                return (
                    <BookCard
                    //    key={book.id}
                        book={book}
                     //   title={book.title}
                     //   id={book.id}
                    //    author={book.author}
                        handleChange={handleChange}
                        library={library}
                    />
                );
            })}
        </div>
    );
};

export default Shelf;
