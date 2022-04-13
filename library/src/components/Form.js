

const Form = (props) => {
 const  { formData, setFormData } = props

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }));
    }

function handleSubmit(event) {
    event.preventDefault()
  //add form data to myLibrary, then that will add it to local storage?
  props.addBook()
  console.log(formData)
}

    return (
        <div className="formDiv">
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>book details</legend>
                    <label htmlFor="title">title </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                        value={formData.title}
                        required
                    />

                    <label>
                        author
                        <input
                            type="text"
                            name="author"
                            placeholder="author"
                            onChange={handleChange}
                            value={formData.author}
                        />
                    </label>

                    <label>
                        pages
                        <input
                            type="number"
                            name="pages"
                            placeholder="pages"
                            onChange={handleChange}
                            value={formData.pages}
                        />
                    </label>

                    <label>
                        start date
                        <input
                            type="date"
                            name="start"
                            onChange={handleChange}
                            value={formData.start}
                        />
                    </label>

                    <label>
                        currently reading
                        <input
                            type="checkbox"
                            name="current"
                            onChange={handleChange}
                            checked={formData.current}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>finished</legend>
                    read
                    <label className="complete">
                        <input
                            type="checkbox"
                            name="complete"
                            id="complete"
                            onChange={handleChange}
                            checked={formData.complete}
                        />
                        <span className="sliderround"></span>
                    </label>
                    <label>
                        end date
                        <input
                            type="date"
                            name="end"
                            onChange={handleChange}
                            value={formData.end}
                        />
                    </label>
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

                <button>reset</button>

                <button>submit</button>
            </form>
        </div>
    );
}

export default Form;
