import styles from './Categories.module.scss'

export const Categories = () => {

    return (
        <div className={styles.categories}>
            <a href = "#fd"className={styles.categories__item}>all</a>
            <a href = "#fd"className={styles.categories__item}>soupe</a>
            <a href = "#fd"className={styles.categories__item}>pizza</a>
            <a href = "#fd"className={styles.categories__item}>pasta</a>
            <a href = "#fd"className={styles.categories__item}>desert</a>
            <a href = "#fd"className={styles.categories__item}>wine</a>
            <a href = "#fd"className={styles.categories__item}>beer</a>
            <a href = "#fd"className={styles.categories__item}>drinks</a>
        </div>
    )
}