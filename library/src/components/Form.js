import { library } from "@fortawesome/fontawesome-svg-core";

const Form = ({ title, author, book, library, dispatch, handleSubmit, handleChange }) => {

    return (
        <div className="formDiv">
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>book details</legend>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                        value={title}
                        required
                    />
                     <label htmlFor="author">author</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="author"
                        onChange={handleChange}
                        value={author}
                    />

                    <button type="button">reset</button>

                    <button type="submit">submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;
