import styles from './Table.module.css'
import image from '../../assets/bmitable.png'

const Table = () => {
    return (
        <div className={styles.container_table}>
            <div className="row">
                <span className="title-color fs-4 mt-3">Check the table below:</span>
                <div className="w-100 mt-1"></div>
                <img className={styles.img_table} src={image} alt="BMI table" />
            </div>
        </div>
    )
}

export default Table;