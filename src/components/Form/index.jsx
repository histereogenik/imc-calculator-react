import { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from './Form.module.css';


const Form = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [showBMI, setShowBMI] = useState(false);
    const [bmi, setBMI] = useState(0);

    const calculateBMI = () => {
        let parsedHeight = parseFloat(height.replace(',', '.'));
        let squareHeight = parsedHeight * parsedHeight;
        let valueBMI = weight / squareHeight;

        if (parsedHeight > 0 && weight > 0) {
            setBMI(valueBMI);
            setShowBMI(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateBMI();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container_form}>
                <div className="row align-items-center mt-1 mb-3">
                    <div className="col-md-2">
                        <span className="title-color">Height</span>
                        <InputMask className={styles.input_area} mask="9,99" placeholder="meters" onBlur={e => setHeight(e.target.value)} required />
                    </div>
                    <div className="col-md-2">
                        <span className="title-color">Weight</span>
                        <input className={styles.input_area} type="number" maxLength="3" placeholder="kilograms" onBlur={e => setWeight(parseFloat(e.target.value))} required />
                    </div>
                    <div className="w-100 mt-1"></div>
                    <div className="col-md-2 d-flex">
                        <button className="btn btn-primary ps-3 pe-4 rounded-pill me-4" type="submit">Calculate</button>
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
                                <span>{bmi.toFixed(1)}</span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;