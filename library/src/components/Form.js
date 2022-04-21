const Form = (props) => {
    const { formData, handleChange, handleSubmit, handleReset } = props;

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
                        value={formData.title}
                        required
                    />

                    <label htmlFor="author">author</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="author"
                        onChange={handleChange}
                        value={formData.author}
                    />

                    <label>pages </label>
                    <input
                        type="number"
                        name="pages"
                        placeholder="pages"
                        onChange={handleChange}
                        value={formData.pages}
                    />

                    <label>start date </label>
                    <input
                        type="date"
                        name="start"
                        onChange={handleChange}
                        value={formData.start}
                    />

                    <label>currently reading </label>
                    <input
                        type="checkbox"
                        name="current"
                        onChange={handleChange}
                        checked={formData.current}
                       // {formData.start.value === today ? formData.current.checked}
                    />
                </fieldset>
                <fieldset>
                    <legend>finished</legend>

                    <label className="complete"> read </label>
                    <input
                        type="checkbox"
                        name="complete"
                        id="complete"
                        onChange={handleChange}
                        checked={formData.complete}
                    />
                    <span className="sliderround"></span>
                    <br />
                    <label>end date </label>
                    <input
                        type="date"
                        name="end"
                        onChange={handleChange}
                        value={formData.end}
                    />

                    <label htmlFor="rating">rating </label>
                    <select
                        id="rating"
                        name="rating"
                        onChange={handleChange}
                        value={formData.rating}
                    >
                        <option value="">-- choose -- </option>
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
                </fieldset>

                <button type="button" onClick={handleReset}>reset</button>

                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Form;
