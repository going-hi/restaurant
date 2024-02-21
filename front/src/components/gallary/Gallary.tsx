import styles from './Gallary.module.scss'
import photo1 from '../../img/png/Rectangle.png'
import photo2 from '../../img/png/Rectangle-1.png'
import photo3 from '../../img/png/Rectangle-2.png'
import photo4 from '../../img/png/Rectangle-3.png'

export const Gallary = () => {
    return (
        
        <div className={styles.gallary}>
            <div className={styles.gallary__item}>
                <img src={photo1} alt="fds" />
            </div>
            <div className={styles.gallary__item}>
                <img src={photo2} alt="fds" />
            </div>
            <div className={styles.gallary__item}>
                <img src={photo3} alt="fds" />
            </div>
            <div className={styles.gallary__item}>
                <img src={photo4} alt="fds" />
            </div>
        </div>
    )
}