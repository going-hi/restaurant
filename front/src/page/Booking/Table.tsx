import styles from './Booking.module.scss'

export const Table = (props: any) => {
    const className = props.booked ? styles.booked : ' '
    return (
        <div className={styles.booking__table + " " + className}>
            <div className={styles.booking__table__number}>{props.text}</div>
            <div className={styles.booking__chair__right}></div>
            <div className={styles.booking__chair__top}></div>
            <div className={styles.booking__chair__left}></div>
            <div className={styles.booking__chair__bottom}></div>
        </div>
    )
}