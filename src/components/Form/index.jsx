import { useState } from 'react';
import styles from './Form.module.css';


const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    return (
        <form>
            <div className={styles.container_form}>
                <div className="row align-items-center">
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row align-items-center mt-1 mb-3">
                    <div className="col-md-2">
                        <span className="title-color">Height</span>
                        <input id="height" className={styles.input_area} type="number" placeholder="meters" />
                    </div>
                    <div className="col-md-2">
                        <span className="title-color">Weight</span>
                        <input id="weight" className={styles.input_area} type="number" placeholder="kilograms" />
                    </div>
                    <div className="col-md-2 d-flex">
                        <button id="calcBtn" className="btn btn-primary ps-3 pe-4 rounded-pill me-4" type="submit">Calculate</button>
                        <button className="btn btn-warning ps-4 pe-5 pt-2 pb-2 rounded-pill" type="reset">Clear</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span className="btn btn-lg btn-success ps-3 pe-4 rounded-pill me-4">Your BMI: <span id="yourBmi">189</span></span>
                        <span className="fs-4">You are FAT</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;