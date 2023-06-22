import { useState } from 'react';
import styles from './Form.module.css';


const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [showBMI, setShowBMI] = useState(false);

    const calculateBMI = () => {
        let squareHeight = height * height;
        let valueBMI = weight / squareHeight;

        if (height > 0 && weight > 0) {
            setShowBMI(true);
            return valueBMI;
        }
    }

    return (
        <form onSubmit={calculateBMI}>
            <div className={styles.container_form}>
                <div className="row align-items-center mt-1 mb-3">
                    <div className="col-md-2">
                        <span className="title-color">Height</span>
                        <input id="height" className={styles.input_area} type="number" placeholder="meters" onBlur={e => setHeight(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <span className="title-color">Weight</span>
                        <input id="weight" className={styles.input_area} type="number" placeholder="kilograms" onBlur={e => setWeight(e.target.value)} />
                    </div>
                    {height}/{weight}
                    <div className="w-100 mt-1"></div>
                    <div className="col-md-2 d-flex">
                        <button id="calcBtn" className="btn btn-primary ps-3 pe-4 rounded-pill me-4" type="submit">Calculate</button>
                        <button 
                            className="btn btn-warning ps-4 pe-5 pt-2 pb-2 rounded-pill" 
                            type="reset"
                            onClick={() => {
                                setHeight(0);
                                setWeight(0);
                                setShowBMI(false);
                            }}>
                            Clear
                        </button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="btn btn-lg btn-success ps-3 pe-4 rounded-pill me-4">
                            Your BMI: {showBMI && (
                                <span id="yourBmi">{calculateBMI()}</span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;