import styles from './Checkbox.module.scss'

export const CheckBox = () => {
    return (
        <>
         <label className={"form-control"}>
            <input className={styles.checkbox} type='checkbox'/>
         </label>
        </>
       
    )
}