import { useState } from 'react'
import styles from './Quantity.module.scss'

export const Quantity = () => {
    const [count, setCount] = useState(1)

    const plus = () => {
        setCount(c => c+ 1)
    }
    
    const minus = () => {
        if(count > 1) {
            setCount(c => c - 1)
        }
    }

    return (
        <div className={styles.quantity}>
                <span className={styles.quantity__button__minus} onClick={minus}>
                    <span>-</span>
                </span>
                <input type="text" name="productСount" className={styles.quantity__input} value={count} disabled={true}/>
                <span className={styles.quantity__button__plus} onClick={plus}>
                    <span>+</span>
                </span>  
        </div> 
    )
}