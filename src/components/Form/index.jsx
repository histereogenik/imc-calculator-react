const Form = () => {
    return (
        <form>
            <label className="title-color">Height</label>
            <input id="height" type="number" step=".01" placeholder="centimeters" />
        </form>
    )
}

export default Form;