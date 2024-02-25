import styles from './Reviews.module.scss'

export const ReviewItem = (props: any) => {

    return (
    <div className={styles.reviews__item}>
        <div className={styles.reviews__item__date}>{props.date}</div>
        <div className={styles.reviews__item__text}>
            {props.text}
        </div>
        <div className={styles.reviews__item__author}>{props.name}</div>
    </div>

    )
}