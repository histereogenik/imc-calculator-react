import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container_header}>
                <h1 className='mb-4 title-color'>BMI Calculator</h1>
                <div className="text-color ">
                    <p>BMI is the acronym for Body Mass Index, a parameter adopted by the World Health Organization to calculate the ideal weight of each person.</p>
                    <p>The index is calculated as follows: the patient's weight is divided by their height squared. An individual is said to have normal weight when the BMI result is between 18.5 and 24.9.</p>
                    <p>Want to find out your BMI? Enter your weight and height in the fields below and compare with the indexes in the table. Important: follow the examples and use dots as separators.</p>
                </div>
            </div>
        </header>
    )
}

export default Header 