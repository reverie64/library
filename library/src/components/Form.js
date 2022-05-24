/*
  <form className="testform" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="book"
                            onChange={handleChange}
                            value={book}
                        />

        
                    </form>

*/

const Form = ( { book, handleSubmit, setBook } ) => {


    return (
        <div className="formDiv">
            
 <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>book details</legend>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        name="book"
                        placeholder="title"
                        onChange={e => setBook(e.target.value)}
                        value={book}
                        required
                    />

<button type="button" >reset</button>

<button type="submit" >submit</button>
</fieldset>
</form> 

</div>
);
};

export default Form;
