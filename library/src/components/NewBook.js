

function NewBook() {
    
    

    return (
    
         <div className="formDiv">
     
                <form className="form">
                    <fieldset>
                        <legend>book details</legend>
                        <label for="title"
                            >title
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="title"
                                required
                            />
                        </label>

                        <label for="author"
                            >author
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="author"
                            />
                        </label>

                        <label for="pages"
                            >pages
                            <input
                                type="number"
                                name="pages"
                                id="pages"
                                placeholder="pages"
                            />
                        </label>

                        <label for="start"
                            >start date
                            <input type="date" name="start" id="start" />
                        </label>

                        <label for="current"
                            >currently reading
                            <input
                                type="checkbox"
                                id="current"
                                name="current"
                                value="yes"
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>finished</legend>
                        read <label class="complete">
                         
                            <input
                                type="checkbox"
                                name="complete"
                                id="complete"
                                value="yes"
                            /> 
                            <span class="sliderround"></span>
                        </label> 
                        <label for="end"
                            >end date
                            <input type="date" name="end" id="end" />
                        </label>

                        <label for="rating"> rating
                            <select name="rating" id="rating">
                                <option value="-">-</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </label>
                    </fieldset>

                    <label for="reset">
                        <button type="reset">reset</button>
                    </label>
                    <label for="sumbit">
                        <button type="submit" id="submit">submit</button>
                    </label>
                </form>
            </div>
    );
  }
  
  export default NewBook;
  


